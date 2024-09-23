"use client";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import { navList } from "@/constants/navlist.admin";
import { useContext } from "react";
import { RootContext } from "@/context/RootContext";
import Image from "next/image";

const Sidebar = () => {
  const context = useContext(RootContext);
  const { showMenu } = context;
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#f8f4f3] p-2 z-20 transition-transform duration-300 transform ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link href="/">
        <Image className=" " src={"/assets/logo.png"} height={20} width={70} />
      </Link>

      {navList.map((item) => (
        <ul
          key={`${item.heading}-${JSON.stringify(item.pages)}`}
          className="mt-12 md:mt-6"
        >
          <span className="text-gray-400 mt-2 font-bold">{item.heading}</span>
          {item.pages.map((page, i) => (
            <li key={`${page.name}-${page.href}`} className="mb-6 group">
              <Link
                href={page.href}
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
