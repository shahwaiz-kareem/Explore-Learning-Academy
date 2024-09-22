"use client";
import { verifyPassword } from "@/actions/auth.action";
import { RootContext } from "@/context/RootContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const context = useContext(RootContext);
  const { setNotify } = context;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await verifyPassword({ password });
      setNotify({
        notify: true,
        success: result.success,
        message: result.message,
      });
      if (result.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      setNotify({
        notify: true,
        success: false,
        message: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-900 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
