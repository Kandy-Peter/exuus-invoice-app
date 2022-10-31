import express from "express";
import bodyParser from "body-parser";
import cors from "cors";  

import sequelize from '../dialects/postgres/config/db.config.js';

import * as functions from "../functions/index.js";

// require the dotenv package
import "dotenv/config.js";

// It's should have a better name for connection test in the future
sequelize.authenticate().then(() => {
  console.log("Connected to DB.");
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Express + Typescript + PostgreSQL server");
});

app.use(functions.InvoiceRouter);
// user routes
app.use('/users', functions.UserRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});