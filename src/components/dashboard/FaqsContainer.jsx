import { getQuestions } from "@/actions/faqs.action";
import QuestionBtn from "./QuestionBtn";

const FaqsContainer = async () => {
  const faqs = await getQuestions();
  return (
    <div className="flex max-w-2xl   justify-center gap-4 flex-col">
      <h2 className="text-xl md:text-2xl text-gray-800 font-semibold ">FAQS</h2>
      {faqs.map((item) => (
        <div
          key={item._id}
          className="flex relative bg-white p-4 rounded-lg shadow-md items-center justify-between gap-2"
        >
          <div className="text-lg">{item.question}</div>
          <QuestionBtn _id={item._id} />
        </div>
      ))}
    </div>
  );
};

export default FaqsContainer;
