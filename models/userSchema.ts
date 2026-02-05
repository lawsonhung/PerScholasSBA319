import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "JournalEntry",
  }],
});

userSchema.index({ username: 1 });

export default mongoose.model("User", userSchema);