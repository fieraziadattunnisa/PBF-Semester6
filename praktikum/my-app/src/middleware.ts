import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = false; // ⛔ ubah jadi false untuk pengujian

  if (!isLogin) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/produk", "/about"], // 🔥 multiple route
};