// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  // Redirect unauthenticated users to /login
  if (!token) {
    if (req.nextUrl.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url))
    }
    return NextResponse.next()
  }

  try {
    jwt.verify(token, JWT_SECRET) // validate
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"],
}
