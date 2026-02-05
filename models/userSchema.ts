import mongoose, { Types, Schema } from "mongoose";
import type { InferSchemaType } from "mongoose";
import type { JournalEntry } from "./journalEntrySchema.js";

const userSchema = new Schema({
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
    type: Types.ObjectId,
    ref: "JournalEntry",
  }],
});

// Indexes
userSchema.index({ username: 1 });

// Instance methods
userSchema.methods.getEntries = async function () {
  return await this.populate('entries');
};

// Automatic type inference ensures User matches schema without having to maintain separate interface and schema definitions
export type User = InferSchemaType<typeof userSchema> & {
  getEntries: () => [JournalEntry];
};

export default mongoose.model<User>("User", userSchema);