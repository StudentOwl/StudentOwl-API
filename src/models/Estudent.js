import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

export default model("student", studentSchema);
