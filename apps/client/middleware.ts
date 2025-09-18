import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value
  const { pathname } = req.nextUrl

  // Public routes that don't need authentication
  const publicRoutes = ["/login", "/register"];
  
  // If has token and trying to access auth pages (login/register)
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If no token and trying to access protected routes
  if (!token && !publicRoutes.includes(pathname)) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", pathname); // Save the page they tried to visit
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
}
