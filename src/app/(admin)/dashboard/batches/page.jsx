import { getBatches } from "@/actions/batch.action";
import Link from "next/link";
export const revalidate = 0;

const Page = async () => {
  const res = await getBatches();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Batches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {res.data.map((batch) => (
          <Link
            href={`/dashboard/batches/${batch.batch_no}`}
            key={batch.batch_no + "_batch"}
            className={"bg-white shadow-md rounded-lg p-4"}
          >
            <h2 className="text-xl font-semibold">
              Batch No: {batch.batch_no}
            </h2>
            <p className="text-gray-700">
              Total Students: {batch.totalStudents}
            </p>
            <p className="text-gray-700">
              Completed: {batch.completed ? "Yes" : "No"}
            </p>
            <p className="text-gray-700">
              Active: {batch.active ? "Yes" : "No"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
