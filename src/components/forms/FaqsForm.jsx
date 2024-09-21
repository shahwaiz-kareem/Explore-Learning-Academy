"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineQuestion } from "react-icons/ai";

import { enrollStudent } from "@/actions/student.action";
import { useContext } from "react";
import { RootContext } from "@/context/RootContext";
import { faqSchema } from "@/lib/validation/faq.validate";
import { createQuestion } from "@/actions/faqs.action";

const FaqsForm = () => {
  const context = useContext(RootContext);
  const { setNotify } = context;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(faqSchema),
  });

  const onSubmit = async (data) => {
    const res = await createQuestion(data);
    setNotify({ notify: true, success: res.success, message: res.message });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="  max-w-2xl  ">
      <h2 className="text-2xl pl-2 font-bold text-gray-800 mb-6">Add FAQ</h2>

      <div className="flex px-4 flex-col gap-6">
        <div className="flex  items-center gap-2">
          <AiOutlineQuestion className="text-black text-xl" />
          <input
            type="text"
            placeholder="Question"
            {...register("question")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.question && (
          <p className="text-red-500">{errors.question.message}</p>
        )}
        <div className="flex  items-center gap-2">
          <FaEnvelope className="text-black text-xl" />
          <input
            type="text"
            placeholder="Answer"
            {...register("answer")}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {errors.answer && (
          <p className="text-red-500">{errors.answer.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-gray-600 mt-4 text-white rounded ml-4 px-6 py-2"
      >
        Add FAQ
      </button>
    </form>
  );
};

export default FaqsForm;
