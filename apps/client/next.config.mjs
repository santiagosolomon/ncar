/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // ⛔ Disable lightningcss (causing your build crash)
  },
  reactStrictMode: true,
  output: 'standalone', // ✅ Recommended for deployment on Render/Vercel
};

export default nextConfig;
