import json
import logging
import mimetypes
import os
import sqlite3
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SEED_PATH = Path(__file__).with_name("portfolio.json")
DB_PATH = Path(os.environ.get("PORTFOLIO_DB_PATH", Path(__file__).with_name("portfolio.sqlite3")))
MEDIA_ROOTS = {
    "public": ROOT / "public",
    "": ROOT / "src" / "Assets",
}


def initialize_database(db_path=DB_PATH, seed_path=SEED_PATH):
    with seed_path.open(encoding="utf-8") as seed_file:
        seed_data = json.load(seed_file)

    if not isinstance(seed_data, dict) or not seed_data:
        raise ValueError("Portfolio seed data must be a non-empty JSON object.")

    db_path = Path(db_path)
    db_path.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(db_path) as connection:
        connection.execute(
            "CREATE TABLE IF NOT EXISTS portfolio_sections "
            "(name TEXT PRIMARY KEY, content TEXT NOT NULL)"
        )
        connection.executemany(
            "INSERT OR IGNORE INTO portfolio_sections (name, content) VALUES (?, ?)",
            [
                (name, json.dumps(content, ensure_ascii=False))
                for name, content in seed_data.items()
            ],
        )


def read_portfolio(db_path=DB_PATH):
    with sqlite3.connect(db_path) as connection:
        rows = connection.execute(
            "SELECT name, content FROM portfolio_sections ORDER BY name"
        ).fetchall()
    return {name: json.loads(content) for name, content in rows}


def make_handler(db_path=DB_PATH):
    class PortfolioRequestHandler(BaseHTTPRequestHandler):
        def send_json(self, status, payload):
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def serve_media(self, path):
            media_path = path.removeprefix("/media/")
            root_name, separator, relative_path = media_path.partition("/")
            root = MEDIA_ROOTS.get(root_name) if separator else None
            if root is None:
                root = MEDIA_ROOTS[""]
                relative_path = media_path

            root = root.resolve()
            file_path = (root / relative_path).resolve()
            try:
                file_path.relative_to(root)
            except ValueError:
                self.send_json(404, {"error": "Media file not found."})
                return

            if not file_path.is_file():
                self.send_json(404, {"error": "Media file not found."})
                return

            content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
            body = file_path.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self):
            path = unquote(urlsplit(self.path).path)
            try:
                if path == "/api/health":
                    self.send_json(200, {"status": "ok"})
                elif path == "/api/portfolio":
                    self.send_json(200, read_portfolio(db_path))
                elif path.startswith("/api/portfolio/"):
                    section = path.removeprefix("/api/portfolio/")
                    portfolio = read_portfolio(db_path)
                    if not section or "/" in section or section not in portfolio:
                        self.send_json(404, {"error": "Portfolio section not found."})
                    else:
                        self.send_json(200, portfolio[section])
                elif path.startswith("/media/"):
                    self.serve_media(path)
                else:
                    self.send_json(404, {"error": "Not found."})
            except sqlite3.Error:
                logging.exception("Portfolio database request failed")
                self.send_json(500, {"error": "Portfolio database request failed."})

        def log_message(self, format_string, *args):
            logging.info("%s - %s", self.address_string(), format_string % args)

    return PortfolioRequestHandler


def main():
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    initialize_database()
    host = os.environ.get("PORTFOLIO_HOST", "127.0.0.1")
    port = int(os.environ.get("PORTFOLIO_PORT", "5000"))
    server = ThreadingHTTPServer((host, port), make_handler())
    logging.info("Portfolio API listening on http://%s:%s", host, port)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        logging.info("Stopping portfolio API")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
