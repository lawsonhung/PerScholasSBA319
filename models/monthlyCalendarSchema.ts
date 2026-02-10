import mongoose, { Types } from "mongoose";
import type { InferSchemaType } from "mongoose";

const monthlyCalendarSchema = new mongoose.Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  month: {
    type: String,
    required: true,
    enum: {
      values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      message: "\'{VALUE}\' is not supported. Only accepted values are: 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ",
    },
  },
  entries: {
    type: [{
      type: Types.ObjectId,
      ref: "JournalEntry",
    }],
    validate: {
      validator: (entriesArray: [Types.ObjectId]) => {
        return entriesArray.length <= 31;
      },
      message: (props: any) => `${props.path} exceeds the limit of 31`,
    },
  },
}, {
  statics: {
    getMonthValues,
  }
});

// Indexes
monthlyCalendarSchema.index({ month: 1 });

// Static methods
function getMonthValues(): [String] {
  return monthlyCalendarSchema.path("month").options.enum.values;
};

export type MonthlyCalendar = InferSchemaType<typeof monthlyCalendarSchema>;

export default mongoose.model<MonthlyCalendar>("MonthlyCalendar", monthlyCalendarSchema);