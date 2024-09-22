"use server";

import { connectToDb } from "@/db/db";
import { Batch } from "@/models/batch.model";
import { getStudents } from "./student.action";
import { revalidatePath } from "next/cache";
import { Setting } from "@/models/settings.model";

const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};

const getSetting = async () => {
  let settings = {
    maxStudents: 0,
  };

  const res = await Setting.findOne({});
  settings.maxStudents = res.maxStudents;
  return settings;
};

export const getBatches = async () => {
  await connectToDb();

  try {
    const students = await getStudents();
    const dbBatches = await Batch.find();
    const maxStudents = (await getSetting()).maxStudents;
    const batches = [];
    const count = Math.ceil(students.length / maxStudents);
    let i = 0;

    while (i < count) {
      const currentBatchStudents = students.slice(
        i * maxStudents,
        (i + 1) * maxStudents
      );
      const totalStudents = currentBatchStudents.length;

      batches.push({
        batch_no: batches.length + 1,
        active: dbBatches[i] && dbBatches[i].active,
        students: [],
        totalStudents,
        completed: totalStudents === maxStudents,
      });

      i++;
    }
    return sendRes({
      success: true,
      message: "Batches are created",
      data: batches,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getBatch = async (batch_no) => {
  await connectToDb();

  try {
    const data = await Batch.findOne({ batch_no });

    return sendRes({
      success: true,
      message: "Batch is fetched",
      data,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerBatch = async (batch_no) => {
  await connectToDb();

  try {
    const maxStudents = (await getSetting()).maxStudents;

    const students = await getStudents();
    const currentBatchStudents = students.slice(
      (batch_no - 1) * maxStudents,
      (batch_no - 1 + 1) * maxStudents
    );
    const batch = await Batch.create({
      batch_no,
      active: false,
      completed: currentBatchStudents.length === maxStudents,
      students: currentBatchStudents,
      startDate: Date.now(),
    });

    revalidatePath(`dashboard/batches`);
    return sendRes({
      success: true,
      message: "Batch is registered successfully",
      data: batch,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateBatch = async (_id, batchInfo) => {
  await connectToDb();
  console.log(_id);
  try {
    await Batch.findByIdAndUpdate(_id, { $set: { ...batchInfo } });
    revalidatePath("/dashboard/batches");
    return sendRes({
      success: true,
      message: "Batch is registered successfully",
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const getBatchesCount = async () => {
  await connectToDb();

  try {
    const data = await Batch.find();
    revalidatePath("/dashboard/batches");
    return sendRes({
      count: data.length,
      success: true,
      message: "Got all batches",
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
