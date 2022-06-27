import express from "express";
import { connect } from "./db/connect";
import router from "./routes/router";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3333, async () => {
  await connect();
  
  console.log("server on!");
});
