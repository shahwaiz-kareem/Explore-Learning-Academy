"use server";

import { connnectToDb } from "@/db/db";
import { Batch } from "@/models/batch.model";
import { getStudents } from "./student.action";

const sendRes = (res) => {
  return JSON.parse(JSON.stringify(res));
};

export const getBatches = async () => {
  await connnectToDb();

  try {
    const students = await getStudents();
    const studentsIds = [];
    const batches = [];
    for (item of students) {
      const id = item._id;
      studentsIds.push(id);
    }
    const count = Math.ceil(studentsIds.length / 20);
    let i = 0;
    while (i !== count) {
      batches.push({
        batchId: batches.length + 1,
        students: studentsIds.slice(0, 20),
        totalStudents: i < count ? 20 : studentsIds.length,
      });

      i++;
    }

    // await Batch.create(userData);

    return sendRes({
      success: true,
      message: "Batches are created",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
