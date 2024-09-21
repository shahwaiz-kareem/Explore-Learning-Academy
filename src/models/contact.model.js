const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
