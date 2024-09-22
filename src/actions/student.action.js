"use server";

import { connectToDb } from "@/db/db";
import { Batch } from "@/models/batch.model";
import { ObjectId } from "mongodb";
import { Student } from "@/models/student.model";
import { revalidatePath } from "next/cache";
import { getBatchesCount, registerBatch } from "./batch.action";
import { Setting } from "@/models/settings.model";

const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};
const getSettings = async () => {
  let settings = {
    maxStudents: 0,
  };

  const res = await Setting.findOne({});
  settings.maxStudents = res.maxStudents;
  return settings;
};
export const enrollStudent = async (userData) => {
  await connectToDb();

  try {
    if (!userData)
      return sendRes({ success: false, message: "Your data is incorrect" });
    const student = await Student.create(userData);
    const batches = await getBatchesCount();

    if (batches.count === 0) {
      await registerBatch(1);
    } else {
      await Batch.findOneAndUpdate(
        { batch_no: batches.count },
        { $push: { students: student } }
      );
    }
    revalidatePath("dashboard/batches");
    return sendRes({
      success: true,
      message:
        "Congratulations! You have been enrolled successfully. We will contact you soon.",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getStudents = async () => {
  await connectToDb();

  try {
    const data = await Student.find()
      .sort({ createdAt: 1 })

      .lean();
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

export const deleteStudent = async (_id, batch_no) => {
  await connectToDb();

  try {
    const deletedStudent = await Student.findByIdAndDelete(_id);

    if (!deletedStudent) {
      return sendRes({ success: false, message: "Student not found" });
    }

    await Batch.findOneAndUpdate(
      { batch_no },
      { $pull: { students: { _id: new ObjectId(_id) } } }
    );

    const dbBatches = await Batch.find();
    await Batch.deleteMany({});

    const dbStudents = await getStudents();
    const maxStudents = (await getSettings()).maxStudents;
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

    console.log(newBatches, batch_no);
    await Batch.insertMany(newBatches);

    revalidatePath("dashboard/batches");

    return sendRes({
      success: true,
      message: "Student deleted and batches updated",
      data: newBatches[batch_no - 1] || null,
    });
  } catch (error) {
    throw new Error(
      `Error deleting student and updating batch: ${error.message}`
    );
  }
};

export const getStudentsStatastics = async () => {
  await connectToDb();

  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const totalStudents = await Student.find().lean();
    const todaysData = await Student.find({
      createdAt: { $gte: startOfDay },
    }).lean();

    return sendRes({
      totalStudents: totalStudents.length,
      todaysStudents: todaysData.length,
      todaysData,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
