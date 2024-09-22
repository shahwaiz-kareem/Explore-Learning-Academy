import { NextResponse } from "next/server";

import { jwtVerify } from "jose";
const verifyToken = async (token) => {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET),
    {
      algorithms: ["HS256"],
    }
  );
  return payload;
};

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    const baseUrl = new URL(req.url);
    baseUrl.pathname = "/auth/signin";

    try {
      const jwtToken = req.cookies.get("dashboard-token")?.value;

      if (!jwtToken || jwtToken === "") {
        if (pathname !== "/auth/signin") {
          return NextResponse.redirect(baseUrl.toString());
        }
      }

      return verifyToken(jwtToken)
        .then(() => {
          return NextResponse.next();
        })
        .catch(() => {
          return NextResponse.redirect(baseUrl.toString());
        });
    } catch (error) {
      if (pathname !== "/auth/signin") {
        return NextResponse.redirect(baseUrl.toString());
      }
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
