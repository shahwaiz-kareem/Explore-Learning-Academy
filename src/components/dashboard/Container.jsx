"use client";

import { RootContext } from "@/context/RootContext";
import { useContext } from "react";

const Container = ({ children }) => {
  const context = useContext(RootContext);
  const { showMenu } = context;
  return (
    <main
      className={`w-full transition-all  duration-300 bg-gray-200 min-h-screen ${
        showMenu ? "md:ml-64  md:w-[calc(100%-256px)]" : ""
      }`}
    >
      {children}
    </main>
  );
};

export default Container;
