import { Router } from "express";
const router = Router();

router.get("/v1.0", (req, res) => {
  res.json({ message: "API v1.0" });
});

export default router;
