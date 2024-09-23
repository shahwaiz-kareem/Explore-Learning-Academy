"use server";

import { connectToDb } from "@/db/db";
import { Setting } from "@/models/settings.model";
import { revalidatePath } from "next/cache";
const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};
export const upsertSettings = async (data) => {
  await connectToDb();
  try {
    const settings = await Setting.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true }
    );
    revalidatePath("/dashboard/settings");
    revalidatePath("/");
    revalidatePath("/enroll");
    revalidatePath("/details");

    return sendRes(settings);
  } catch (error) {
    console.log(error);
    throw new Error("Error updating settings: " + error.message);
  }
};

export const getSettings = async () => {
  try {
    await connectToDb();
    const settings = await Setting.findOne({}).lean();
    return sendRes(settings);
  } catch (error) {
    return sendRes(error.message);
  }
};
