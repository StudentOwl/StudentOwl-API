import { Router } from "express";
import ComponentRoutes from "./component.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API v1.0" });
});

router.get("/ping", (req, res) => {
  res.json({ message: "API v1.0 is active." });
});

router.use("/components", ComponentRoutes);

export default router;
