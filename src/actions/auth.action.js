"use server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
export const verifyPassword = async (data) => {
  const { password } = data;
  try {
    if (password !== process.env.LOGIN_PASSWORD) {
      return JSON.stringify({ message: "Incorrect passowrd", success: false });
    }

    const token = await new SignJWT({ user: "authenticated" })
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    cookies().set("dashboard-token", token, {
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 60 * 24,
    });

    return JSON.parse(
      JSON.stringify({ message: "Login successful", success: true })
    );
  } catch (error) {
    return JSON.parse(
      JSON.stringify({ message: error.message, success: false })
    );
  }
};
