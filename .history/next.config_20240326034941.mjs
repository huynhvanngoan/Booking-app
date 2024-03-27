/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    images: {
        remotePatterns: [
            {imgcld.yatra.com}
        ]
    }
};

export default nextConfig;
