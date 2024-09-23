import { getDetails } from "@/actions/batch.action";

import FAQs from "@/components/home/FAQs";
import { Mission } from "@/components/home/Mission";
import Technologies from "@/components/home/Technologies";

import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const data = await getDetails();
  return (
    <section className="flex flex-col gap-6 items-center px-2 justify-center">
      <div className="flex items-center justify-between mt-12 h-full px-2 sm:px-6 gap-6 lg:gap-2 flex-col lg:flex-row-reverse">
        <div className="flex  -z-10 items-center h-full sm:w-full md:w-72 lg:w-full justify-center">
          <Image
            src={"/assets/hero.jpg"}
            className="w-full h-full animate-updown"
            width={2000}
            height={1666}
            priority
            alt="illustration of web development"
          />
        </div>
        <div className="flex items-center mt-4 justify-between lg:pl-1  w-full flex-col">
          <div className="flex  items-center justify-center flex-col gap-2">
            <h2 className=" mb-2 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl">
              Empowering the Future of Coding{" "}
              <span className="text-gray-600 text-center">
                Welcome to ExploreLearning AcademyYasin
              </span>
            </h2>
            <span className="text-gray-700 text-base lg:text-lg">
              Learn to build scalable web applications from scratch with our
              expert-led training. Get hands-on experience and the skills to
              succeed in the web development industry. Join our {data.duration}
              -month program and discover a new path to success.
            </span>

            <div className="text-lg mt-2 px-4">
              <div className="text-center  sm:text-start">
                <p className="mb-4 font-semibold">
                  {data.availableSeats > 0
                    ? "Note: Seats are available on a first-come, first-served basis."
                    : "Note: We  don't have any seat available now, But you can still enroll to next batch"}
                </p>
              </div>
            </div>
            <div className="text-xl  text-start">
              <span className="text-gray-600 font-semibold">
                Available seats:{" "}
              </span>
              <span className="text-orange-600 ">{data.availableSeats}</span>
            </div>
            <button className="bg-green-400 rounded-lg hover:bg-green-500 px-4 mt-2 py-2 text-white flex items-center justify-center">
              <Link href={"/enroll"}>
                {data.availableSeats > 0
                  ? "Enroll Now"
                  : "Enroll in next batch"}
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Mission />
      <Technologies />
      <FAQs />
    </section>
  );
};

export default Page;
