import express from "express";
import { homeCtrl } from "./controllers";

const app = express();
const port = 8080;

app.get("/", homeCtrl);

app.listen(port, "localhost", () =>
  console.log(`Typescript app listening on port ${port}!`)
);
