import express from "express";
import monthlyCalendarCTRL from "../controller/monthlyCalendarController.js";

const router = express.Router();

router
  .route("/")
  .get(monthlyCalendarCTRL.getAll);

router
  .route("/:id")
  .get(monthlyCalendarCTRL.getOne);

export default router;