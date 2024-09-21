"use client";
import { updateBatch } from "@/actions/batch.action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = ({ params }) => {
  console.log(params);
  const [formData, setFormData] = useState({
    startDate: "",
    batchName: "",
    instructor: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.startDate) {
      setError("All fields are required!");
      return;
    }
    await updateBatch(params._id, {
      active: true,
      startDate: formData.startDate,
    });
    router.push("/dashboard/batches");

    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4   p-4 max-w-3xl"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="startDate" className="font-bold text-gray-700">
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="p-2 bg-black text-white rounded-md hover:"
      >
        Done
      </button>
    </form>
  );
};

export default Page;
