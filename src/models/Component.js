import { Schema, model } from "mongoose";

const componentSchema = new Schema(
  {
    _id: {
      type: String
    },
    code: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    teacher: {
      type: ObjectId,
      required: true
    },
    students: {
      type: [String]
    }
  },
  {
    versionKey: false
  }
);

export default model("Component", componentSchema);
