/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, chil };

        return config;
    },
};

export default nextConfig;
