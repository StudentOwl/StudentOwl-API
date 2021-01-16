import mongoose from "mongoose";
import config from "./config";

(async () => {
  const db = await mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database is connected to:", db.connection.name);
})();
