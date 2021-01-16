import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API v1.0" });
});

router.get("/ping", (req, res) => {
  res.json({ message: "API v1.0 is active." });
});

export default router;
