"use client";

import { RootContext } from "@/context/RootContext";
import { useContext, useEffect } from "react";

const Notify = () => {
  const context = useContext(RootContext);
  const { notify, setNotify } = context;

  useEffect(() => {
    if (notify.notify) {
      const timer = setTimeout(() => {
        setNotify({ notify: false, success: false, message: "" });
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [notify, setNotify]);

  return (
    <div
      className={`${
        notify.notify ? "translate-x-0 right-1" : "translate-x-full"
      } transition-all fixed right-0  bg-white shadow-lg rounded-xl flex items-center max-w-xs sm:max-w-sm md:max-w-md z-20 lg:max-w-lg px-4 py-3 mt-2`}
    >
      <div
        className={`${
          notify.success ? "bg-green-500" : "bg-red-500"
        } h-8 w-2 flex-shrink-0 rounded-l-xl`}
      ></div>

      <div className="ml-3 text-gray-900 text-sm">{notify.message}</div>
    </div>
  );
};

export default Notify;
