import { config } from "dotenv";
config();

export default {
  MONGODB_GENERAL: process.env.MONGODB_URI || "mongodb://localhost/database",
  MONGODB_LOGS: process.env.MONGODB_LOGS || "mongodb://localhost/database"
};
