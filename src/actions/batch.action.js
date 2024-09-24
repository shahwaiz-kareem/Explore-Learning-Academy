"use server";

import { connectToDb } from "@/db/db";
import { Batch } from "@/models/batch.model";
import { getStudents } from "./student.action";
import { revalidatePath } from "next/cache";

import { getSettings as settingsApi } from "./settings.action";

const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};

const getSettings = async () => {
  return await settingsApi();
};

export const getBatches = async () => {
  await connectToDb();

  try {
    const students = await getStudents();
    const settings = await getSettings();
    const dbBatches = await Batch.find();
    const maxStudents = settings.maxStudents;
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
        students: currentBatchStudents,
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
    const settings = await getSettings();

    const maxStudents = settings.maxStudents;

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
    revalidatePath(`/`);
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
    revalidatePath("/details");

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
export const reConstructBatches = async () => {
  await connectToDb();

  try {
    const dbBatches = await Batch.find();
    await Batch.deleteMany({});
    const settings = await getSettings();

    const dbStudents = await getStudents();
    const maxStudents = settings.maxStudents;
    let i = 0;
    const count = Math.ceil(dbStudents.length / maxStudents);
    const newBatches = [];

    while (i < count) {
      const currentBatchStudents = dbStudents.slice(
        i * maxStudents,
        (i + 1) * maxStudents
      );

      const totalStudents = currentBatchStudents.length;

      const previousBatch = dbBatches[i] || {};

      newBatches.push({
        batch_no: i + 1,
        active: previousBatch.active || false,
        students: currentBatchStudents,
        totalStudents,
        completed: totalStudents === maxStudents,
        startDate: previousBatch.startDate || Date.now(),
      });

      i++;
    }

    await Batch.insertMany(newBatches);

    revalidatePath("dashboard/batches");

    return sendRes({
      success: true,
      batches: newBatches,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const getDetails = async () => {
  await connectToDb();

  try {
    const settings = await getSettings();
    const maxStudents = settings.maxStudents;
    const activeBatch = await Batch.findOne({ active: true }).lean();

    let availableSeats = 0;

    if (activeBatch) availableSeats = maxStudents - activeBatch.students.length;
    return sendRes({
      availableSeats,
      startDate: activeBatch?.startDate || new Date(),
      ...settings,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
