import { getStudentsStatastics } from "@/actions/student.action";
import StatusContainer from "@/components/dashboard/StatusContainer";

const Page = async () => {
  const data = await getStudentsStatastics();
  return (
    <>
      <StatusContainer stats={data} />
    </>
  );
};

export default Page;
