"use client";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import { navList } from "@/constants/navlist.admin";
import { useContext } from "react";
import { RootContext } from "@/context/RootContext";

const Sidebar = () => {
  const context = useContext(RootContext);
  const { showMenu } = context;
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#f8f4f3] p-4 z-20 transition-transform duration-300 transform ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link
        href="/"
        className="md:flex hidden items-center   pb-4 border-b border-b-gray-800"
      >
        <h2 className="font-bold text-2xl">
          Mountain
          <span className="bg-green-400 text-white px-2 rounded-md">
            Coaders
          </span>
        </h2>
      </Link>

      {navList.map((item, index) => (
        <ul key={index} className="mt-16 md:mt-4">
          <span className="text-gray-400 mt-2 font-bold">{item.heading}</span>
          {item.pages.map((page) => (
            <li className="mb-6 group">
              <Link
                href={page.href}
                key={page.name}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <page.icon className="ri-home-2-line mr-3 text-lg" />
                <span className="text-sm">{page.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ))}

      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
