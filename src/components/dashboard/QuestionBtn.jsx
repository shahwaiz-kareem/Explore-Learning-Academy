"use client";

import { deleteQuestion } from "@/actions/faqs.action";
import { RootContext } from "@/context/RootContext";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

const QuestionBtn = ({ _id }) => {
  const context = useContext(RootContext);
  const { setNotify } = context;
  const deleteFaq = async () => {
    const res = deleteQuestion(_id);
    setNotify({
      notify: true,
      success: res.success,
      message: "Question deleted successfully!",
    });
  };

  return (
    <button
      onClick={deleteFaq}
      className="flex items-center justify-center absolute top-1 right-1"
    >
      <AiFillDelete className="text-red-500 hover:text-red-400 text-xl" />
    </button>
  );
};

export default QuestionBtn;
