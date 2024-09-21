"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap } from "react-icons/fa";

import { enrollSchema } from "@/lib/validation/enroll.validate";
import { enrollStudent } from "@/actions/student.action";
import { useContext } from "react";
import { RootContext } from "@/context/RootContext";

const EnrollForm = () => {
  const context = useContext(RootContext);
  const { setNotify } = context;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(enrollSchema),
  });

  const onSubmit = async (data) => {
    const res = await enrollStudent(data);

    setNotify({ notify: true, success: res.success, message: res.message });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-50 shadow-lg p-2 sm:p-2 lg:px-2 lg:py-4 rounded-lg  max-w-xl mx-auto space-y-6 "
    >
      <h2 className="text-2xl pl-2 font-bold text-gray-800 mb-6">Enroll Now</h2>

      <div className="flex px-4 flex-col gap-6">
        <div className="flex  items-center gap-2">
          <FaUser className="text-green-500 text-xl" />
          <input
            type="text"
            placeholder="Full Name"
            {...register("name")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <div className="flex  items-center gap-2">
          <FaUser className="text-green-500 text-xl" />
          <input
            type="text"
            placeholder="Father's Name"
            {...register("father")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.father && (
          <p className="text-red-500">{errors.father.message}</p>
        )}

        <div className="flex items-center gap-2">
          <FaUser className="text-green-500 text-xl" />
          <input
            type="number"
            placeholder="Age"
            {...register("age", { valueAsNumber: true })}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}

        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-green-500 text-xl" />
          <select
            {...register("education")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select Education Level</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="collage">Collage Student</option>
            <option value="university">University Student</option>
            <option value="Graduation">Graduated</option>
          </select>
        </div>
        {errors.education && (
          <p className="text-red-500">{errors.education.message}</p>
        )}

        {/* Gender */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <label className="text-lg font-medium">Gender:</label>
          <label className="flex  items-center gap-1">
            <input type="radio" value="Male" {...register("gender")} />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" value="Female" {...register("gender")} />
            Female
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-green-500 text-xl" />
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-green-500 text-xl" />
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Computer Skill */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="font-medium">
            Do you know how to use a computer?
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" value="Yes" {...register("computerSkill")} />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" value="No" {...register("computerSkill")} />
            No
          </label>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="font-medium">
            Do you have computer or laptop at home?
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" value="Yes" {...register("laptop")} />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" value="No" {...register("laptop")} />
            No
          </label>
        </div>
        {errors.laptop && (
          <p className="text-red-500">{errors.laptop.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-gradient-to-br from-green-400 via-teal-400 to-blue-300 text-white rounded ml-4 px-6 py-2"
      >
        Enroll Now
      </button>
    </form>
  );
};

export default EnrollForm;
