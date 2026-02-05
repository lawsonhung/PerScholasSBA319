import mongoose, { connections } from "mongoose";
import dotenv from "dotenv";
import User from "../models/userSchema.js";
import userSeed from "./data.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

async function seedDatabase() {
  console.log("🚀 Starting seed");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    await User.deleteMany({});
    console.log("✅ Deleted previous");

    await User.create(userSeed);
    console.log("✅ Added new users");
    
    console.log("🎉 Successfully seeded");
    process.exit(1);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

seedDatabase();