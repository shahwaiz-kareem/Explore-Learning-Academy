import { getDetails } from "@/actions/batch.action";
import EnrollForm from "@/components/forms/EnrollForm";
import Image from "next/image";
export const metadata = {
  title: "Enroll || Explore Learning Academy Yasin",
  description:
    "Enroll to explore learning academy yasin to make you future bright.",
};
const Page = async () => {
  const months = [
    "january",
    "februry",
    "march",
    "april",
    "May",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const data = await getDetails();
  const date = new Date(data.startDate);
  const startDate = `${date.getDate()} ${
    months[date.getUTCMonth()]
  }, ${date.getFullYear()}`;

  return (
    <div className="bg-slate-50   py-12 px-2 sm:px-6 lg:px-2 lg:py-6">
      <div className="max-w-7xl mx-auto   p-0 sm:p-12 lg:px-4 lg:py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">
            Enroll in Explore Learning Academy Yasin
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Join our full-stack web development course and learn HTML, CSS,
            JavaScript, Node.js, MongoDB, and Express , React in just{" "}
            {data.duration} months.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-8">
          <div className="flex-1">
            <EnrollForm />
          </div>
          <div className="flex-1 p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center bg-gradient-to-tr from-[#00a1b4] via-[#00a8b4] to-[#00d899] text-white transform transition-all duration-300  hover:shadow-3xl">
            <Image
              className="py-2"
              src={"/assets/logo.png"}
              height={260}
              alt="logo"
              width={342}
            />
            <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
            <p className="text-lg">
              <strong>Start Date:</strong> {startDate}
            </p>
            <p className="text-lg mt-2">
              <strong>Course Duration:</strong> {data.duration} Months
            </p>
            <p className="text-lg mt-2">
              <strong>Fee:</strong> Rs {data.feePerMonth}/month
            </p>

            <span className="text-xl mt-2 font-semibold ">Timing:</span>
            <p className="text-lg   ">
              First-Shift:{" "}
              <span className="uppercase">{data?.shiftTiming1} </span>
            </p>
            <p className="text-lg   ">
              Second-Shift:{" "}
              <span className="uppercase">{data?.shiftTiming2} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
