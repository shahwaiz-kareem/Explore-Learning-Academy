import { FaUserGraduate, FaUserPlus, FaCalendarDay } from "react-icons/fa";

const StatusContainer = ({ stats }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Total Students Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="text-sm font-medium text-gray-500">
                Total Students
              </div>
              <div className="flex items-center mb-1">
                <div className="text-3xl font-semibold text-gray-800">
                  {stats.totalStudents}
                </div>
              </div>
            </div>
            <div className="text-green-500">
              <FaUserGraduate size={40} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="text-sm font-medium text-gray-500">
                Students Added Today
              </div>
              <div className="flex items-center mb-1">
                <div className="text-3xl font-semibold text-gray-800">
                  {stats.todaysStudents}
                </div>
              </div>
            </div>
            <div className="text-blue-500">
              <FaUserPlus size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusContainer;
