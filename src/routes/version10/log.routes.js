import { Router } from "express";
import * as LogCtrl from "../../controllers/logs.controller";

const router = Router();

router.route("/all").get(LogCtrl.findLogs).delete(LogCtrl.deleteAllLogs);

router.route("/data/all").get(LogCtrl.getApplicationData);

router.post("/new", LogCtrl.saveNewLogs);

router.route("/:component(\\w{4}\\d{2})").get(LogCtrl.findLogs);

router.route("/:component(\\w{4}\\d{2})/:student").get(LogCtrl.findLogs);

export default router;
