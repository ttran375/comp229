# Configuring The Frontend and Backend Setup Using - Vite

## Creating a new Vite app

``` sh
yarn create vite client --template react
```

## Configuring Vite

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
