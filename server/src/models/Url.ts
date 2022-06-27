import mongoose from "mongoose";

const Url = mongoose.model(
  "Encurtador",
  new mongoose.Schema(
    {
      urlId: {
        type: String,
        required: true,
      },
      origUrl: {
        type: String,
        required: true,
      },
      shortUrl: {
        type: String,
        required: true,
      },
      hits: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    { timestamps: true }
  )
);

export default Url;
