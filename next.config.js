/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_MAP_API: "AIzaSyC085kBESY6TaCyBt1RuhhjEFz1j0E33iM",
  },
};

module.exports = nextConfig;
