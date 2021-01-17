import config from "../config";
import mongoose from "mongoose";

const logsDb = async () => {
  try {
    const conn = await mongoose.createConnection(config.MONGODB_LOGS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Database is connected to:", conn.name);

    console.log(`DB ${conn.name} loaded models`);

    return conn;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default logsDb();
