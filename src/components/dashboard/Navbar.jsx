"use client";

import { RootContext } from "@/context/RootContext";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(RootContext);
  const { setShowMenu } = context;
  return (
    <div className="py-6 px-6 bg-[#f8f4f3] flex items-center justify-between shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <div className="flex items-center justify-center gap-2 flex-row-reverse">
        <a href="#" className="flex md:hidden     border-b border-b-gray-800">
          <h2 className="font-bold text-lg sm:text-2xl">
            Mountain
            <span className="bg-green-400 text-white px-2 rounded-md">
              Coaders
            </span>
          </h2>
        </a>
        <button
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}
          className="text-lg flex gap-0.5 flex-col text-gray-900 font-semibold z-40 relative"
        >
          <div className="w-7 h-1 rounded-full bg-gray-700"></div>
          <div className="w-7 h-1 rounded-full bg-gray-700"></div>
          <div className="w-7 h-1 rounded-full bg-gray-700"></div>
        </button>
      </div>

      {/* Other Navbar Content */}
    </div>
  );
};

export default Navbar;
