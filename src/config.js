import { config } from "dotenv";
config();

export default {
  MONGODB_URL: process.env.MONGODB_URI || "mongodb://localhost/database"
};
