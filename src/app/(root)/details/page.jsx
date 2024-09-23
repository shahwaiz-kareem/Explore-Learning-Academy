import { getDetails } from "@/actions/batch.action";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaTachometerAlt,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";
export const metadata = {
  title: "Detail || Explore Learning Academy Yasin",
  description: "Get more details about this course.",
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
  console.log(data);
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Details and Information
          </h1>
          <p className="text-lg text-gray-600">
            Discover how Explore Learning Academy Yasin is transforming the
            landscape of web development education.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We are on a mission to educate and empower every individual with the
            latest and most in-demand skills, bridging the gap between
            traditional knowledge and modern advancements.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Tech-Stack offered
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our full-stack (mern-stack) course covers a comprehensive range of
            technologies in just {data.duration} months. Learn the essentials of
            web development with:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TailwindCss</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React.js</li>
            <li>Project(hands-On)</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Course Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaCalendarAlt className="text-2xl text-[#00a1b4]" />
              <div>
                <span className="text-xl font-semibold text-gray-800">
                  Start Date:
                </span>
                <p className="text-lg capitalize text-gray-700">{startDate}</p>{" "}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl text-[#00a1b4]" />
              <div>
                <span className="text-xl font-semibold text-gray-800">
                  Time:
                </span>
                <p className="text-lg text-gray-700  ">
                  First-Shift:{" "}
                  <span className="uppercase">{data?.shiftTiming1} </span>
                </p>
                <p className="text-lg text-gray-700  ">
                  Second-Shift:{" "}
                  <span className="uppercase">{data?.shiftTiming2} </span>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaDollarSign className="text-2xl text-[#00a1b4]" />
              <div>
                <span className="text-xl font-semibold text-gray-800">
                  Fee:
                </span>
                <p className="text-lg text-gray-700">
                  {data?.feePerMonth}/month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Meet Our Instructor
          </h2>
          <div className="flex md:items-center flex-col md:flex-row gap-4 ">
            <Image
              src="/assets/profile.png"
              alt="Shahwaiz Karim"
              className="rounded-full border-4 border-[#00a1b4] w-32 h-32 object-cover"
              width={128}
              height={128}
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Shahwaiz Karim
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Shahwaiz Karim is a full-stack software developer with over 4
                years of intense experience. With a passion for technology and
                education, Shahwaiz is dedicated to helping students achieve
                their career goals in web development. Instagram account:
              </p>
              <Link
                target="_blank"
                className="inline-flex mt-1 items-center  "
                href={"https://www.instagram.com/__shahwaix_2k23/"}
              >
                <AiFillInstagram
                  className={"text-red-500 text-2xl font-bold"}
                />
                <span className="text-sm font-semibold text-gray-800">
                  @__shahwaix_2k23
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <FaTachometerAlt className="text-5xl text-[#00a1b4]" />
              <div>
                <h3 className="text-xl mt-2 font-semibold text-gray-800">
                  Fast Track Learning
                </h3>
                <p className="text-gray-700 mt-2">
                  Accelerate your skills with our intensive 2-month program
                  designed for rapid learning and application.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaLaptopCode className="text-5xl text-[#00a1b4]" />
              <div>
                <h3 className="text-xl mt-2 font-semibold text-gray-800">
                  Hands-On Experience
                </h3>
                <p className="text-gray-700 mt-2">
                  Work on real-world projects and gain practical experience to
                  enhance your skills and build your portfolio.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserGraduate className="text-4xl text-[#00a1b4]" />
              <div>
                <h3 className="text-xl mt-1 font-semibold text-gray-800">
                  Expert Guidance
                </h3>
                <p className="text-gray-700 mt-2">
                  Learn from industry experts with years of experience who are
                  committed to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
