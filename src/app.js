import express from "express";
import ApiRoutes from "./routes/api.routes";

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to StudentOwl-API" });
});

app.use("/api", ApiRoutes);

export default app;
