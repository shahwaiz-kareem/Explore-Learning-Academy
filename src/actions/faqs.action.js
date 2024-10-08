"use server";

import { connectToDb } from "@/db/db";
import { FAQs } from "@/models/faqs.model";
import { revalidatePath } from "next/cache";
const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};
export const createQuestion = async (data) => {
  await connectToDb();
  try {
    const res = await FAQs.create(data);

    revalidatePath("/dashboard/faqs");
    return sendRes({ ...res, success: true });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getQuestions = async () => {
  await connectToDb();
  try {
    const res = await FAQs.find().lean();

    return sendRes(res);
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteQuestion = async (_id) => {
  await connectToDb();
  try {
    const res = await FAQs.findByIdAndDelete(_id).lean();
    revalidatePath("/dashboard/faqs");

    return sendRes({ ...res, success: true });
  } catch (error) {
    throw new Error(error.message);
  }
};
