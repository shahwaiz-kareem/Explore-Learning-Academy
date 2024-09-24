import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;
    } catch (error) {
      throw new Error("Database connection error: " + error.message);
    }
  }
};
