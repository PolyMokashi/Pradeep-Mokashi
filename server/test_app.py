import json
import tempfile
import unittest
from pathlib import Path

from app import initialize_database, read_portfolio


class PortfolioDatabaseTests(unittest.TestCase):
    def test_initializes_all_portfolio_sections(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            db_path = Path(temporary_directory) / "portfolio.sqlite3"
            initialize_database(db_path)

            portfolio = read_portfolio(db_path)

            self.assertEqual(
                set(portfolio),
                {"profile", "projects", "certificates", "education", "experience", "skills"},
            )
            self.assertEqual(len(portfolio["projects"]), 6)
            self.assertEqual(len(portfolio["certificates"]), 7)
            self.assertEqual(len(portfolio["skills"]), 18)
            self.assertIn(".m3u8", portfolio["projects"][1]["src"])
            self.assertTrue(portfolio["profile"]["image"].startswith("/media/"))

    def test_existing_database_content_is_not_overwritten(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            db_path = Path(temporary_directory) / "portfolio.sqlite3"
            initialize_database(db_path)

            import sqlite3

            with sqlite3.connect(db_path) as connection:
                connection.execute(
                    "UPDATE portfolio_sections SET content = ? WHERE name = 'profile'",
                    (json.dumps({"name": "Updated"}),),
                )

            initialize_database(db_path)

            self.assertEqual(read_portfolio(db_path)["profile"]["name"], "Updated")


if __name__ == "__main__":
    unittest.main()
