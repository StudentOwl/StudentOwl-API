import { Router } from "express";
import * as StudentCtrl from "../../controllers/student.controller";

const router = Router();

router.get("/:component", StudentCtrl.getAllStudents);

export default router;
