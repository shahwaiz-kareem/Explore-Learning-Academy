"use server";

import { connectToDb } from "@/db/db";
import { Setting } from "@/models/settings.model";
import { revalidatePath } from "next/cache";
import { reConstructBatches } from "./batch.action";
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
    await reConstructBatches();
    revalidatePath("/dashboard/settings");
    revalidatePath("/dashboard/batches");
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
  await connectToDb();
  try {
    const settings = await Setting.findOne({}).lean();
    return sendRes(settings);
  } catch (error) {
    return sendRes(error.message);
  }
};
