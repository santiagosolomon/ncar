(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__4143f073._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/client/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/client/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
function middleware(req) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;
    // Public routes that don't need authentication
    const publicRoutes = [
        "/login",
        "/register"
    ];
    // If has token and trying to access auth pages (login/register)
    if (token && publicRoutes.includes(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", req.url));
    }
    // If no token and trying to access protected routes
    if (!token && !publicRoutes.includes(pathname)) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("from", pathname); // Save the page they tried to visit
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|api).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__4143f073._.js.map