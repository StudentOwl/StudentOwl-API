import express from "express";
import ApiRoutes from "./routes/api.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to StudentOwl-API" });
});

app.use("/api", ApiRoutes);

export default app;
