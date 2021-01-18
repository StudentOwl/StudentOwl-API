import { Schema } from "mongoose";

const logSchema = new Schema(
  {
    class: {
      type: String,
      required: true
    },
    time: {
      type: Date,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    applicationName: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: false
    },
    student: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

export default logSchema;
