import cors from "cors";
import express from "express";
import connection from "./database.js";
import router from "./routers/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export default app;
