import { Router } from "express";
import * as LogCtrl from "../../controllers/logs.controller";

const router = Router();

router.route("/all").get(LogCtrl.findLogs).delete(LogCtrl.deleteAllLogs);

router.route("/data/applicationuse").get(LogCtrl.getApplicationData);

router.get("/data/timeperday", LogCtrl.totalTimes);

router.get("/data/timeperhour", LogCtrl.totalHours);

router.post("/new", LogCtrl.saveNewLogs);

// router.route("/:component(\\w{4}\\d{2})").get(LogCtrl.findLogs);

// router.route("/:component(\\w{4}\\d{2})/:student").get(LogCtrl.findLogs);

export default router;
