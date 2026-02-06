import express from "express";
import journalEntryCTRL from "../controller/journalEntryController.js";

const router = express.Router();

router
  .route("/")
  .get(journalEntryCTRL.getAll)
  .post(journalEntryCTRL.createOne);

router
  .route("/:id")
  .get(journalEntryCTRL.getOne)
  .patch(journalEntryCTRL.patchOne)
  .delete(journalEntryCTRL.deleteOne);

export default router;