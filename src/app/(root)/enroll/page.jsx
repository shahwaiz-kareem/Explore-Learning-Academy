import EnrollForm from "@/components/forms/EnrollForm";

const Page = () => {
  return (
    <div className="bg-slate-50   py-12 px-2 sm:px-6 lg:px-2 lg:py-6">
      <div className="max-w-7xl mx-auto   p-0 sm:p-12 lg:px-4 lg:py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
            Enroll in Mountain Coders
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Join our full-stack web development course and learn HTML, CSS,
            JavaScript, Node.js, MongoDB, and Express in just 2 months.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-8">
          {/* Form Section */}
          <div className="flex-1">
            <EnrollForm />
          </div>

          {/* Course Details Section */}
          <div className="flex-1 p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center bg-gradient-to-tr from-green-400 via-teal-400 to-blue-300  text-white transform transition-all duration-300  hover:shadow-3xl">
            <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
            <p className="text-lg">
              <strong>Start Date:</strong> October 1, 2024
            </p>
            <p className="text-lg mt-2">
              <strong>Course Duration:</strong> 2 Months
            </p>
            <p className="text-lg mt-2">
              <strong>Fee:</strong> Rs 6000 (Full Course)
            </p>

            {/* Icons */}
            <div className="flex items-center flex-col justify-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                <i className="text-xl text-white">📞</i>
                <p className="text-lg">Phone no: +92 301 2345678</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="text-xl text-white">✉️</i>
                <p className="text-lg">Email: info@mountaincoders.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
