import mongoose from "mongoose";
import "dotenv/config";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Database connected!");
  } catch (e) {
    console.log(`Error connecting to database: ${e}`);
    process.exit(1);
  }
}
