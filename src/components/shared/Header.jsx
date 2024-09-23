import Link from "next/link";
import Hamburger from "../header/Hamburger";
import Menu from "../header/Menu";
import { navList } from "@/constants/navlist";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-teal-400 via-teal-400 to-blue-400 px-4 shadow-lg">
      <Menu />
      <Image
        className="py-1 "
        src={"/assets/logo.png"}
        height={20}
        width={75}
      />

      <div className="hidden sm:flex items-center gap-8">
        {navList.map((item) => {
          return (
            <div
              key={item.name + "_header"}
              className="flex items-center gap-2 group"
            >
              <item.icon className="text-2xl text-white transition-transform group-hover:scale-110" />
              <Link
                className="capitalize text-lg font-semibold text-white transition-colors duration-300 hover:text-yellow-200"
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center bg-white text-green-600 font-bold rounded-full px-6 py-2 shadow-md hover:bg-green-100 transition-colors duration-300">
          <Link href={"/enroll"}>Enroll Now</Link>
        </button>

        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
