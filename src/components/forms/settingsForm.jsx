"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { settingsSchema } from "@/lib/validation/settings.validate";
import { upsertSettings } from "@/actions/settings.action";
import { RootContext } from "@/context/RootContext";

const SettingsForm = ({
  updateFeePerMonth,
  updateMaxStudents,
  updateDuration,
  updateShiftTiming1,
  updateShiftTiming2,
}) => {
  const context = useContext(RootContext);
  const { setNotify } = context;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      feePerMonth: updateFeePerMonth || "",
      maxStudents: updateMaxStudents || "",
      duration: updateDuration || "",
      shiftTiming1: updateShiftTiming1 || "",
      shiftTiming2: updateShiftTiming2 || "",
    },
    resolver: zodResolver(settingsSchema),
  });

  const onSubmit = async (data) => {
    await upsertSettings(data);
    setNotify({
      notify: true,
      success: true,
      message: "Settings are updated successfully",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4  p-4"
    >
      <div className="flex  flex-col gap-2">
        <label htmlFor="feePerMonth" className="font-bold text-gray-700">
          Fee per Month:
        </label>
        <input
          type="number"
          id="feePerMonth"
          {...register("feePerMonth", { valueAsNumber: true })}
          className="p-2 border rounded-md"
        />
        {errors.feePerMonth && (
          <p className="text-red-500">{errors.feePerMonth.message}</p>
        )}
      </div>

      {/* Maximum Students in One Batch */}
      <div className="flex  flex-col gap-2">
        <label htmlFor="maxStudents" className="font-bold text-gray-700">
          Maximum Students in One Batch:
        </label>
        <input
          type="number"
          id="maxStudents"
          {...register("maxStudents", { valueAsNumber: true })}
          className="p-2 border rounded-md"
        />
        {errors.maxStudents && (
          <p className="text-red-500">{errors.maxStudents.message}</p>
        )}
      </div>

      {/* Duration */}
      <div className="flex  flex-col gap-2">
        <label htmlFor="duration" className="font-bold text-gray-700">
          Duration (in months):
        </label>
        <input
          type="number"
          id="duration"
          {...register("duration", { valueAsNumber: true })}
          className="p-2 border rounded-md"
        />
        {errors.duration && (
          <p className="text-red-500">{errors.duration.message}</p>
        )}
      </div>

      {/* Shift Timing 1 */}
      <div className="flex  flex-col gap-2">
        <label htmlFor="shiftTiming1" className="font-bold text-gray-700">
          1st Shift Timing:
        </label>
        <input
          type="text"
          id="shiftTiming1"
          {...register("shiftTiming1")}
          className="p-2 border rounded-md"
        />
        {errors.shiftTiming1 && (
          <p className="text-red-500">{errors.shiftTiming1.message}</p>
        )}
      </div>

      {/* Shift Timing 2 */}
      <div className="flex  flex-col gap-2">
        <label htmlFor="shiftTiming2" className="font-bold text-gray-700">
          2nd Shift Timing:
        </label>
        <input
          type="text"
          id="shiftTiming2"
          {...register("shiftTiming2")}
          className="p-2 border rounded-md"
        />
        {errors.shiftTiming2 && (
          <p className="text-red-500">{errors.shiftTiming2.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="p-2 bg-black text-white rounded-md hover:bg-zinc-800"
      >
        Submit
      </button>
    </form>
  );
};

export default SettingsForm;
