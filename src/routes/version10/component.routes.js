import { Router } from "express";
import * as ComponentCtrl from "../../controllers/component.controller";

const router = Router();

router
  .route("/all")
  .get(ComponentCtrl.findAllComponents)
  .delete(ComponentCtrl.deleteAllComponent);

router.post("/new", ComponentCtrl.createComponent);

// :id -> AAAA99
// :id(^\w{4}\d{2}$)
router
  .route("/:id([A-Z]{4}[0-9]{2})")
  .get(ComponentCtrl.findOneComponent)
  .put(ComponentCtrl.updateComponent)
  .delete(ComponentCtrl.deleteComponent);

export default router;
