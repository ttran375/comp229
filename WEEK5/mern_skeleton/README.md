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

})

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {

console.log();

console.log(` App running in port ${PORT}`);

console.log();

console.log(` > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
```
