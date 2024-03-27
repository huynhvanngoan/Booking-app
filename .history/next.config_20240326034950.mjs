/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    images: {
        remotePatterns: [{ hostname: "imgcld.yatra.com" }],
    },
};

export default nextConfig;
