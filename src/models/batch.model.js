import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  batch_no: { type: Number, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  active: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

export const Batch =
  mongoose.models.Batch || mongoose.model("Batch", batchSchema);
