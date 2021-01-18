import { Router } from "express";
const router = Router();

import ver10 from "./version10/version1.0.routes";

router.get("/", (req, res) => {
  res.json({ message: "Versions: 1" });
});

router.use("/v1.0", ver10);

export default router;
