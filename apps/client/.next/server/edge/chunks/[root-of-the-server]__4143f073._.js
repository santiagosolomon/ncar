(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__4143f073._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/client/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // middleware.ts
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import jwt from "jsonwebtoken"
// const JWT_SECRET = process.env.JWT_SECRET || "supersecret"
// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value
//   // Redirect unauthenticated users to /login
//   if (!token) {
//     if (req.nextUrl.pathname !== "/login") {
//       return NextResponse.redirect(new URL("/login", req.url))
//     }
//     return NextResponse.next()
//   }
//   try {
//     jwt.verify(token, JWT_SECRET) // validate
//     return NextResponse.next()
//   } catch {
//     return NextResponse.redirect(new URL("/login", req.url))
//   }
// }
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"],
// }
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__4143f073._.js.map