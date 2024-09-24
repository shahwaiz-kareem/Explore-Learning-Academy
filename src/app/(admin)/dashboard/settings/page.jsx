import { getSettings } from "@/actions/settings.action";
import SettingsForm from "@/components/forms/settingsForm";

const Page = async () => {
  const res = await getSettings();

  return (
    <div className="flex flex-col    p-4">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="px-2 lg:px-8 ">
        <SettingsForm
          updateFeePerMonth={res?.feePerMonth}
          updateMaxStudents={res?.maxStudents}
          updateDuration={res?.duration}
          updateShiftTiming1={res?.shiftTiming1}
          updateShiftTiming2={res?.shiftTiming2}
        />
      </div>
    </div>
  );
};

export default Page;
