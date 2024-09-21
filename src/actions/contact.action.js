"use server";

import { connnectToDb } from "@/db/db";
import { Contact } from "@/models/contact.model";
import { revalidatePath } from "next/cache";

const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};

export const sendContactDetails = async (userData) => {
  await connnectToDb();

  try {
    if (!userData)
      return sendRes({ success: false, message: "Your data is incorrect" });
    await Contact.create(userData);
    revalidatePath("/dashboard/contact");
    return sendRes({
      success: true,
      message: "Your data has been send. We will  reach you soon.",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getContactDetails = async () => {
  await connnectToDb();

  try {
    const res = await Contact.find().lean();

    return sendRes(res);
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteContact = async (_id) => {
  await connnectToDb();

  try {
    const res = await Contact.findByIdAndDelete(_id).lean();
    revalidatePath("/dashboard/contact");
    return sendRes({ ...res, success: true });
  } catch (error) {
    throw new Error(error.message);
  }
};
