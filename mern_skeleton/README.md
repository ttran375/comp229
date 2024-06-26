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

### Nodemon and Concurrently

```sh
yarn add --dev nodemon
yarn add global concurrently
```

## Running the app #

Add the script in the `client` package.json file:

```json
"dev": "concurrently 'vite' 'nodemon server.js'"
```

Run, yarn init in the root folder to create the package.json

```js
yarn init
yarn global add vite
yarn add concurrently --dev
```

`package.json` in the client

```json
{
  "dependencies": {
    "express": "^4.19.2",
    "global": "^4.4.0"
  },
  "scripts": {
    "dev": "concurrently 'vite' \"nodemon server.js\"",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "devDependencies": {
    "concurrently": "^8.2.2",
    "nodemon": "^3.1.2"
  },
  "name": "mern_skeleton",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Blessing",
  "license": "MIT"
}
```

`package.json` in the server

```json
{
  "dependencies": {
    "express": "^4.19.2",
    "global": "^4.4.0"
  },
  "scripts": {
    "dev": "concurrently 'vite' \"nodemon server.js\"",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "devDependencies": {
    "concurrently": "^8.2.2",
    "nodemon": "^3.1.2"
  },
  "name": "mern_skeleton",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Blessing",
  "license": "MIT"
}
```

- Use this command to check if vite is installed:
- npx vite –v
- Then proceed to install if not already installed.

Copy the public folder from the client folder and paste in
the root folder

Updated index.html file in the root folder is as follows:

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
    <div id="root">Hello World</div>
  </body>
</html>
```

Run the application since we are running it concurrently it will display the port number where both frontend and backend is running:

``` sh
yarn dev
```

### Development dependencies

``` sh
yarn add --dev @babel/core babel-loader @babel/preset-env
```

Create a file called .babelrc in the mern_skeleton folder as follows:

`.babelrc`

``` json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

`config.js`

```js
const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
};

export default config;
```

`package.json`

```json
{
  "dependencies": {
    "express": "^4.19.2",
    "global": "^4.4.0"
  },
  "scripts": {
    "dev": "concurrently 'vite' \"nodemon server.js\"",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "babel-loader": "^9.1.3",
    "concurrently": "^8.2.2",
    "nodemon": "^3.1.3",
    "vite": "^5.2.12"
  },
  "name": "mern_skeleton",
  "version": "1.0.0",
  "type":"module",
  "main": "index.js",
  "author": "Blessing",
  "license": "MIT"
}
```

### Configuring Express

```sh
yarn add express
```

`express.js`

```js
import express from "express";
const app = express();
/*... configure express ... */ 
export default app;
```

```sh
yarn add body-parser
yarn add cookie-parser
yarn add compression
yarn add helmet
yarn add cors
```

`express.js`

```js
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
export default app;
```

### Starting the server

`server.js`

```js
import config from './config/config.js' 
import app from './server/express.js'
app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})
```

## Setting up Mongoose and connecting to MongoDB

```sh
yarn add mongoose
```

`server.js`

```js
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
```

`template.js`

```

```

### template.js

```js
export default () => {
  return `<!doctype html>
    <html lang="en"> 
    <head>
    <meta charset="utf-8">
    <title>MERN Skeleton</title> 
    </head>
    <body>
    <div id="root">Hello World</div> 
    </body>
    </html>`;
};
```

### Updated express.js file

```js
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "./../template.js";

const app = express();

//...
app.get("/", (req, res) => {
  res.status(200).send(Template());
});
//...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
export default app;
```

### Updated server.js file

```js
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

```

### Updated user.model.js

```js
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  hashed_password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
});
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });
UserSchema.path("hashed_password").validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required");
  }
}, null);
module.exports = mongoose.model("User", UserSchema);
```

### Update the server.js

`server.js`
```js
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  });
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
```
