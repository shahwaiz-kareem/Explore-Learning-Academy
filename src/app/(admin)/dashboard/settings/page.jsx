import SettingsForm from "@/components/forms/settingsForm";
import { Setting } from "@/models/settings.model";

const Page = async () => {
  const res = await Setting.findOne({}).lean();
  const { feePerMonth, maxStudents, duration, shiftTiming1, shiftTiming2 } =
    res;
  return (
    <div className="flex flex-col    p-4">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="px-2 lg:px-8 ">
        <SettingsForm
          updateFeePerMonth={feePerMonth}
          updateMaxStudents={maxStudents}
          updateDuration={duration}
          updateShiftTiming1={shiftTiming1}
          updateShiftTiming2={shiftTiming2}
        />
      </div>
    </div>
  );
};

export default Page;
