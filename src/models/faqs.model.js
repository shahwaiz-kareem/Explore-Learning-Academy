import mongoose from "mongoose";

const faqsSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

export const FAQs = mongoose.models.FAQs || mongoose.model("FAQs", faqsSchema);
