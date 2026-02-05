import mongoose, { connections } from "mongoose";
import dotenv from "dotenv";
import User from "../models/userSchema.js";
import JournalEntry from "../models/journalEntrySchema.js";
import userSeed from "./userData.js";
import journalEntrySeed from "./journalEntryData.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await User.deleteMany({});
    await JournalEntry.deleteMany({});
    console.log("✅ Deleted previous");

    await User.create(userSeed);
    await JournalEntry.create(journalEntrySeed);
    console.log("✅ Added new users and journal entries");
    
    console.log("🎉 Successfully seeded");
    process.exit(1);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

seedDatabase();