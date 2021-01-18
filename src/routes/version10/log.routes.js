import { Router } from "express";
import * as LogCtrl from "../../controllers/logs.controller";

const router = Router();

router.param("component", LogCtrl.capitalizeComponentId);

router
  .route("/:component(\\w{4}\\d{2})/")
  .get(LogCtrl.findAllLogsByComponentQueryTest);

router
  .route("/:component(\\w{4}\\d{2})/:msStart(\\d{13})?-?:msEnd(\\d{13})?")
  .get(LogCtrl.findAllLogsByComponent);
router
  .route("/:component(\\w{4}\\d{2})/:student")
  .get(LogCtrl.findAllLogsByComponent)
  .post(LogCtrl.saveNewLogs);
router
  .route(
    "/:component(\\w{4}\\d{2})/:student/:msStart(\\d{13})?-?:msEnd(\\d{13})?"
  )
  .get(LogCtrl.findAllLogsByComponent);

export default router;
