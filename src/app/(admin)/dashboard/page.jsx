import { getStudentsStatastics } from "@/actions/student.action";
import { FaUserGraduate, FaUserPlus } from "react-icons/fa";
export const revalidate = 0;
const Page = async () => {
  const data = await getStudentsStatastics();
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-sm font-medium text-gray-500">
                  Total Students
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-3xl font-semibold text-gray-800">
                    {data?.totalStudents}
                  </div>
                </div>
              </div>
              <div className="text-[#00a1b4]">
                <FaUserGraduate size={40} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-sm font-medium text-gray-500">
                  Students Enrolled Today
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-3xl font-semibold text-gray-800">
                    {data?.todaysStudents}
                  </div>
                </div>
              </div>
              <div className="text-[#00a1b4]">
                <FaUserPlus size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
