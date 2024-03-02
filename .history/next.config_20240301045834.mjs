/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    webpack5: true,
    webpack: (config) => {
        config
    }
};

export default nextConfig;
