/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  trailingSlash: true,
  output: "standalone",
};

export default nextConfig;
