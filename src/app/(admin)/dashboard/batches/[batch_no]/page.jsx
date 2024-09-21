"use client";
import { getBatch, registerBatch, updateBatch } from "@/actions/batch.action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const keysObj = {
    father: "father's name",
    laptop: "Availability of laptop at home",
    computerSkill: " skill to use basic computer",
  };

  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const batchData = await getBatch(params.batch_no);
      setBatch(batchData?.data || null);

      if (!batchData.data) {
        const res = await registerBatch(params.batch_no);
        setBatch(res.data);
      }

      setLoading(false);
    };
    fetchData();
  }, [params.batch_no]);

  const stopBatch = async () => {
    await updateBatch(batch._id, { active: false });
    router.push("/dashboard/batches");
  };

  return (
    <div className="flex px-4 mt-4 flex-col gap-4 justify-center">
      {loading ? (
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-800 font-bold">
              Students in Batch {params.batch_no}
            </h1>
            {!batch.active ? (
              <Link
                href={`/dashboard/batches/${params.batch_no}/${batch._id}`}
                className="bg-blue-500 px-4 rounded-lg py-2 text-white"
              >
                Start Batch
              </Link>
            ) : (
              <button
                onClick={stopBatch}
                className="bg-red-500 px-4 py-2 rounded-lg text-white"
              >
                Stop Batch
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {batch.students.map((student) => (
              <div
                key={student._id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h2 className="text-xl font-semibold">Name: {student.name}</h2>
                {Object.keys(student).map((key) => {
                  if (key === "name" || key === "_id") return null;
                  return (
                    <p
                      key={key + `_${student.name}`}
                      className="text-gray-700 capitalize"
                    >
                      <span className="font-bold">
                        {keysObj[key] ? keysObj[key] : key}
                      </span>
                      : {student[key]}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
