import mongoose, { connections } from "mongoose";
import dotenv from "dotenv";
import User from "../models/userSchema.js";
import JournalEntry from "../models/journalEntrySchema.js";
import MonthlyCalendar from "../models/monthlyCalendarSchema.js";
import userSeed from "./userData.js";
import journalEntrySeed from "./journalEntryData.js";
import monthlyCalendarSeed from "./monthlyCalendarData.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await User.deleteMany({});
    await JournalEntry.deleteMany({});
    await MonthlyCalendar.deleteMany({});
    console.log("✅ Deleted previous");

    await User.create(userSeed);
    await JournalEntry.create(journalEntrySeed);
    await MonthlyCalendar.create(monthlyCalendarSeed);
    console.log("✅ Added new users, journal entries, calendars");
    
    console.log("🎉 Successfully seeded");
    process.exit(1);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

seedDatabase();