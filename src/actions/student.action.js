"use server";

import { connectToDb } from "@/db/db";

import { Student } from "@/models/student.model";

const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};

export const enrollStudent = async (userData) => {
  await connectToDb();

  try {
    if (!userData)
      return sendRes({ success: false, message: "Your data is incorrect" });
    await Student.create(userData);

    return sendRes({
      success: true,
      message:
        "Congratulations! You have been enrolled successfully. For more information, go to the details page.",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getStudents = async () => {
  await connectToDb();

  try {
    const data = await Student.find().sort({ createdAt: 1 }).lean();
    return sendRes(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStudentById = async (_id) => {
  await connectToDb();

  try {
    const data = await Student.findById({ _id }).lean();
    return sendRes({ ...data });
  } catch (error) {
    throw new Error(error.message);
  }
};
