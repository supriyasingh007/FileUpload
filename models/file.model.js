import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    
    fileUrl: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("file", fileSchema); //iska collection bana dena jiska naam "file" hoga