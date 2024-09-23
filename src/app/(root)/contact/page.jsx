import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "@/components/forms/ContactForm";

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 lg:p-12">
          <ContactForm />
        </div>

        <div className="flex-1 lg:flex-shrink-0 lg:pl-8 lg:mb-0">
          <div className="bg-white shadow-lg rounded-lg p-6 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="flex items-center text-lg text-gray-700 mb-4">
              <FaPhoneAlt className="mr-2 text-green-500" />
              <span>
                <strong>Phone1:</strong> +923153642064
              </span>
            </div>
            <div className="flex items-center text-lg text-gray-700 mb-4">
              <FaPhoneAlt className="mr-2 text-green-500" />
              <span>
                <strong>Phone2:</strong> +92554507449
              </span>
            </div>
            <div className="flex items-center text-lg text-gray-700 mb-4">
              <FaEnvelope className="mr-2 text-green-500" />
              <span>
                <strong>Email:</strong> ExploreLearning
                AcademyYasin.org@gmail.com
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Address:</strong> P.O Yasin, center Yasin, Near Post
              office Yasin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
