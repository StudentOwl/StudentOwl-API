import config from "../config";
import componentSchema from "../models/Component";
import mongoose from "mongoose";

const generalDb = async () => {
  try {
    const conn = await mongoose.createConnection(config.MONGODB_GENERAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Database is connected to:", conn.name);

    conn.model("Component", componentSchema);
    console.log(`DB ${conn.name} loaded models`);

    return conn;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default generalDb();
