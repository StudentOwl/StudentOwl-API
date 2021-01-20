import { config } from "dotenv";
config();

export default {
  MONGODB_GENERAL:
    process.env.MONGODB_URI || `mongodb://localhost/${process.env.DB_API}`
};
