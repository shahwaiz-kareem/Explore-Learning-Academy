"use client";
import { usePathname } from "next/navigation";
import { createContext, useState } from "react";
export const RootContext = createContext();
export const RootContextProvider = ({ children }) => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(pathname.includes("dashboard"));
  const [notify, setNotify] = useState({
    notify: false,
    success: false,
    message: true,
  });

  return (
    <RootContext.Provider value={{ showMenu, setShowMenu, notify, setNotify }}>
      {children}
    </RootContext.Provider>
  );
};
