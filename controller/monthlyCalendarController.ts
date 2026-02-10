import type { RequestHandler } from "express";
import MonthlyCalendar from "../models/monthlyCalendarSchema.js";

const getAll: RequestHandler = async (req, res) => {
  let allCalendars = await MonthlyCalendar.find({});

  res.json(allCalendars);
};

const getOne: RequestHandler = async (req, res) => {
  let foundCalendar = await MonthlyCalendar.findById(req.params.id);

  res.json(foundCalendar);
};

export default { getAll, getOne };