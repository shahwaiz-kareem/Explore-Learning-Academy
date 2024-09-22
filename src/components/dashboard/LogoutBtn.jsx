"use client";

import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const logoutUser = async () => {
    document.cookie = "dashboard-token=; Max-Age=0; path=/;";
    router.push("/auth/signin");
  };
  return (
    <div>
      <button
        onClick={logoutUser}
        className="px-4 py-2 w-full bg-black rounded-lg text-white "
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
