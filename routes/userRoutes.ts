import express from "express";
import userCTRL from "../controller/userController.js";

const router = express.Router();

router
  .route("/")
  .post(userCTRL.createUser)
  .get(userCTRL.getAll);

router
  .route("/:id")
  .patch(userCTRL.patchOne)
  .delete(userCTRL.deleteOne)
  .get(userCTRL.getOne);

router
  .route("/:id/entries")
  .get(userCTRL.getEntries)
  .post(userCTRL.createEntry);

export default router;