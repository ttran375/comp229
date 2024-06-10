# REST API

## Adding user CRUD APIs

`server/routes/user.routes.js`

```js
import express from "express";
import userCtrl from "../controllers/user.controller.js";
const router = express.Router();
router.route("/api/users").post(userCtrl.create);
router.route("/api/users").get(userCtrl.list);
router.param("userId", userCtrl.userByID);
router.route("/api/users/:userId").get(userCtrl.read);
router.route("/api/users/:userId").put(userCtrl.update);
router.route("/api/users/:userId").delete(userCtrl.remove);

export default router;
```

Updated express.js

```js
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "./../template.js";
import userRoutes from './routes/user.routes.js'

const app = express();
app.get("/", (req, res) => {
  res.status(200).send(Template());
});

app.use('/', userRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
export default app;
```
