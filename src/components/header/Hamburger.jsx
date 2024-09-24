"use client";

import { RootContext } from "@/context/RootContext";
import { useContext } from "react";

const Hamburger = () => {
  const context = useContext(RootContext);
  const { setShowMenu } = context;

  return (
    <div
      onClick={() => setShowMenu((prev) => !prev)}
      className="sm:hidden  self-end cursor-pointer flex gap-0.5 flex-col items-center justify-center"
    >
      <span className="w-7 h-1 bg-white rounded-full" />
      <span className="w-7 h-1 bg-white rounded-full" />
      <span className="w-7 h-1 bg-white rounded-full" />
    </div>
  );
};

export default Hamburger;
