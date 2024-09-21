import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    father: { type: String, required: true },
    age: { type: String, required: true },
    education: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    computerSkill: { type: String, required: true },
    laptop: { type: String, required: true },
  },
  { timestamps: true }
);

export const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
