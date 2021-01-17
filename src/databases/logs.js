import config from "../config";
import mongoose from "mongoose";
import logSchema from "../models/Log";

const logsDb = async () => {
  try {
    const conn = await mongoose.createConnection(config.MONGODB_LOGS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Database is connected to:", conn.name);

    conn.model("GTPR01", logSchema, "GTPR01");
    console.log(`DB ${conn.name} loaded models`);

    return conn;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default logsDb();
