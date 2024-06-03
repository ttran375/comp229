# Configuring The Frontend and Backend Setup Using - Vite

## Creating a new Vite app

``` sh
yarn create vite client --template react
```

## Configuring Vite

This is to set the bundle’s entry point to src/main.jsx
instead of the default index.html.

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

``` html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"
/>
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
<script type="module"
src="http://localhost:3000/src/main.jsx"></script>
</body>
</html>
```
