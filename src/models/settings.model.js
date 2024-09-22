import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  feePerMonth: {
    type: Number,
    required: [true, "Fee per month is required"],
    min: [1, "Fee per month must be at least 1"],
  },
  maxStudents: {
    type: Number,
    required: [true, "Maximum number of students is required"],
    min: [1, "There must be at least 1 student in the batch"],
  },
  duration: {
    type: Number,
    required: [true, "Duration is required"],
    min: [1, "Duration must be at least 1 month"],
  },
  shiftTiming1: {
    type: String,
    required: [true, "First shift timing is required"],
  },
  shiftTiming2: {
    type: String,
    required: [true, "Second shift timing is required"],
  },
});

export const Setting =
  mongoose.models.Setting || mongoose.model("Setting", settingSchema);
