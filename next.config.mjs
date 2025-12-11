/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      devTools: false,   // ✅ Disable Next.js DevTools (removes the N icon)
    },
  },
}

export default nextConfig
