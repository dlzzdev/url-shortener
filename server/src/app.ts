import express from "express";
import { connect } from "./db/connect";
import router from "./routes/router";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, async () => {
  await connect();

  console.log(`Server running on port ${PORT}`);
});
