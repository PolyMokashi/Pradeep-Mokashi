# Pradeep Mokashi Portfolio

This React portfolio reads its projects, certificates, education, experience,
skills, profile links, and media references from a small SQLite-backed API.
Images and documents in `src/Assets` and `public` are served by the API from
their existing files; remote images and hosted videos remain URL references in
the database seed.

## Run locally

Use Python 3 and Node.js/npm. No extra Python packages are needed.

1. In one terminal, start the API:

   ```sh
   npm run backend
   ```

   The API initializes `server/portfolio.sqlite3` from
   `server/portfolio.json` the first time it runs and listens on
   `http://127.0.0.1:5000`.

2. In another terminal, start the React app:

   ```sh
   npm start
   ```

   The development server proxies API and `/media` requests to the backend.

The database is seeded only for missing sections, so edits made in SQLite are
preserved when the backend restarts. To restore seed content for a section,
delete that section from the `portfolio_sections` table and restart the API.

## API

- `GET /api/health` — backend status
- `GET /api/portfolio` — all portfolio sections
- `GET /api/portfolio/{section}` — one of `profile`, `projects`,
  `certificates`, `education`, `experience`, or `skills`
- `GET /media/{path}` — local images, animations, and public documents

The API binds to localhost by default. Set `PORTFOLIO_HOST`, `PORTFOLIO_PORT`,
or `PORTFOLIO_DB_PATH` to override the host, port, or SQLite database file.

## Existing React scripts

The frontend was bootstrapped with Create React App.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
