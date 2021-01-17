import { Router } from "express";
import ComponentRoutes from "./component.routes";
import LogRoutes from "./log.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API v1.0" });
});

router.get("/ping", (req, res) => {
  res.json({ message: "API v1.0 is active." });
});

router.use("/components", ComponentRoutes);

router.use("/logs", LogRoutes);

export default router;
