import mongoose from "mongoose";

export const connnectToDb = async () => {
  let isConnected = false;

  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
      throw new Error("Database is not connected! error: " + error.message);
    }
  } else {
    return console.log("Database is already connected");
  }
};
