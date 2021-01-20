import { Router } from "express";
import * as LogCtrl from "../../controllers/logs.controller";

const router = Router();

router
  .route("/")
  .get(LogCtrl.findLogs)
  .post(LogCtrl.saveNewLogs)
  .delete(LogCtrl.deleteAllLogs);

router.route("/:component(\\w{4}\\d{2})").get(LogCtrl.findLogs);

router.route("/:component(\\w{4}\\d{2})/:student").get(LogCtrl.findLogs);

export default router;
