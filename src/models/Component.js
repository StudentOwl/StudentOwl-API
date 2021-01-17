import { Schema } from "mongoose";

const componentSchema = new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    teacher: {
      type: String,
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

export default componentSchema;
