import express from "express";
import journalEntryCTRL from "../controller/journalEntryController.js";

const router = express.Router();

router
  .route("/")
  .get(journalEntryCTRL.getAll);

export default router;