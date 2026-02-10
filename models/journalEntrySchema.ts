import mongoose, { Types } from "mongoose";
import type { InferSchemaType } from "mongoose";

const journalEntrySchema = new mongoose.Schema({
  authorId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
  },
  mood: {
    type: String,
    enum: {
      values: ["sad", "neutral", "happy"],
      message: '\"{VALUE}\" is not supported. Only accepted values are: "sad", "neutral", "happy" ',
    },
    default: "neutral",

  },
  moodValue: {
    type: Number,
    enum: {
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      message: '\"{VALUE}\" is not valid. Has to be an integer between 0-10 inclusive.',
    },
    default: 5,
  },
}, {
  timestamps: true,
  statics: {
    getMoodStrings,
    getMoodValues,
  }
});

// Indexes
journalEntrySchema.index({ createdAt: 1 });

// Static methods
function getMoodStrings(): [String] {
  return journalEntrySchema.path("mood").options.enum.values;
};

function getMoodValues(): [Number] {
  return journalEntrySchema.path("moodValue").options.enum.values;
};

export type JournalEntry = InferSchemaType<typeof journalEntrySchema>;

export default mongoose.model("JournalEntry", journalEntrySchema);