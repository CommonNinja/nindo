## Dev env variables

#### Plugin variables (mandatory)

```
# The server app name (chartsninja, tablesninja, etc.) - Should be one word, ended with `ninja`
REACT_APP_NINJA_SERVICE_NAME=       somethingninja
# Plugin type (chart, feed, table, etc.) - Should be one / two words, snake_case
REACT_APP_NINJA_PLUGIN_TYPE=        plugin_type
# Plugin path (comparison-tables, bracket, etc.) - Should be one / two words, kebab-case
REACT_APP_NINJA_PLUGIN_PATH=        plugin-name
# Plugin title (will appear at the top of the editor)
REACT_APP_NINJA_PLUGIN_TITLE=       App Name
```

#### API variables

```
REACT_APP_PLUGIN_API_URL=           http://localhost:5006
REACT_APP_USERS_SERVICE_URL=        http://localhost:5001
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Mock Server

We're using mimic for client side mocks. See more info below:
https://mimic.readme.io/reference
