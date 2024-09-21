import FaqsContainer from "@/components/dashboard/FaqsContainer";
import FaqsForm from "@/components/forms/FaqsForm";

const Page = () => {
  return (
    <div className="flex flex-col p-4 gap-6">
      <FaqsContainer />
      <FaqsForm />
    </div>
  );
};

export default Page;
