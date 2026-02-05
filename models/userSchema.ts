import mongoose, { Model, Types, Schema } from "mongoose";
import type { JournalEntryModel } from "./journalEntrySchema.js";

interface User {
  firstName: string,
  lastName: string,
  username: string,
  entries: [Types.ObjectId]
};

interface UserMethods {
  getEntries(): Promise<any>
};

export type UserModel = Model<User, {}, UserMethods>;

const userSchema = new mongoose.Schema<User, UserModel, UserMethods>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  entries: [{
    type: Schema.Types.ObjectId,
    ref: "JournalEntry",
  }],
});

// Indexes
userSchema.index({ username: 1 });

// Instance methods
userSchema.methods.getEntries = async function () {
  return await this.populate<{journalEntry: JournalEntryModel}>('entries');
};

export default mongoose.model<User, UserModel>("User", userSchema);