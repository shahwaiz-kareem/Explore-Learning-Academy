"use client";
import { RootContext } from "@/context/RootContext";
import { useContext } from "react";
import { navList } from "@/constants/navlist";
import Link from "next/link";

import Image from "next/image";

const Menu = () => {
  const context = useContext(RootContext);
  const { showMenu } = context;
  return (
    <>
      <div
        className={`fixed transition-transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } left-0 top-0 bg-gradient-to-br from-[#00a1b4] via-[#00a8b4] to-[#00d899]  shadow-lg h-screen w-2/3 z-40 flex flex-col gap-4 p-6 ease-in-out duration-500`}
      >
        <div className="h-auto w-auto">
          <Image
            className="py-2 "
            src={"/assets/logo.png"}
            alt="logo"
            height={20}
            width={80}
          />
        </div>

        <nav className="flex flex-col gap-6 mt-2">
          {navList.map((item) => (
            <div
              key={item.name + "_menu"}
              className="flex items-center gap-3 group"
            >
              <item.icon className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <Link
                className="capitalize text-lg font-semibold text-white transition-colors duration-300 group-hover:text-yellow-200"
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Enroll Button */}
        <div className="mt-6">
          <button className="w-full bg-white text-green-600 font-bold rounded-full py-3 shadow-md hover:bg-green-100 transition-colors duration-300">
            <Link href={"/enroll"}>Enroll Now</Link>
          </button>
        </div>
      </div>

      {showMenu && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => context.setShowMenu(false)}
        ></div>
      )}
    </>
  );
};

export default Menu;
