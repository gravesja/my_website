/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keeps strict mode enabled
  experimental: {
    appDir: true, // Enables the app directory if needed
  },
  compiler: {
    styledComponents: true, // Enables styled-components support (if used)
  },
};

export default nextConfig;
