# Configuring The Frontend and Backend Setup Using - Vite

## Creating a new Vite app

``` sh
yarn create vite client --template react
```

## Configuring Vite

`vite.config.js`

``` js
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    manifest: true,

    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
```

## Reorganizing the folder structure

`index.html`

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import RefreshRuntime from "http://localhost:3000/@react-refresh";
      RefreshRuntime.injectIntoGlobalHook(window);
      window.$RefreshReg$ = () => {};
      window.$RefreshSig$ = () => (type) => type;
      window.__vite_plugin_react_preamble_installed__ = true;
    </script>
    <script type="module" src="http://localhost:3000/src/main.jsx"></script>
  </body>
</html>
```

## Creating the server

Navigate to the root folder, type the following command

``` sh
touch server.js
yarn add express
```

`server.js`

```js
const express = require("express");

const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",

    from: "Vanaldito",
  });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();

  console.log(` App running in port ${PORT}`);

  console.log();

  console.log(` > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
```

This will allow us to use our frontend in the backend.
But we have a new problem: the static assets (images,
videos, etc.). To solve it, we need to create a
middleware to manage the assets. Run the following
commands: from the root folder (i.e from the
terminal):

```sh
mkdir server
touch server/assets-router.js
```

`assets-router.js`

```js
const express = require("express");

const router = express.Router();

const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // You can add other image formats

const videoRegex = /\/.+\.(mp4|ogv)$/;

router.get(imageRegex, (req, res) => {
  const filePath = req.path;

  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

router.get(videoRegex, (req, res) => {
  const filePath = req.path;

  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

module.exports = router;
```

And add the following lines in the server.js file:

```js
const assetsRouter = require("./server/assets-router");
app.use("/src", assetsRouter);
```

Updated `server.js`
```js
const express = require("express");

const path = require("path");

const app = express();

const assetsRouter = require("./server/assets-router");

app.use("/src", assetsRouter);

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",

    from: "Vanaldito",
  });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();

  console.log(` App running in port ${PORT}`);

  console.log();

  console.log(` > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
```

## Nodemon and Concurrently

```sh
yarn add --dev nodemon
yarn add global concurrently
```

## Running the app

Add the script in the `client` package.json file:

```json
"dev": "concurrently 'vite' 'nodemon server.js'"
```

## Installing vite globally

Run, yarn init in the root folder to create the package.json

```js
yarn init
yarn global add vite
yarn add concurrently --dev
```
