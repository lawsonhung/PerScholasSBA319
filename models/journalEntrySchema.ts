import mongoose, { Model, Types } from "mongoose";

interface JournalEntry {
  authorId: Types.ObjectId,
  content: string,
  mood: string,
  moodValue: number,
}

export type JournalEntryModel = Model<JournalEntry>;

const journalEntrySchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
  mood: {
    type: String,
    enum: ["sad", "neutral", "happy"],
    default: "neutral",
    message: '{VALUE} is not supported',
  },
  moodValue: {
    type: Number,
    // Access enum values: const enumValues = MyModel.schema.path('fieldName').options.enum;   
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    default: 5,
    message: '{VALUE} is not valid. Has to be an integer between 0-10 inclusive.',
  },
}, { timestamps: true });

journalEntrySchema.index({ createdAt: 1 });

export default mongoose.model("JournalEntry", journalEntrySchema);