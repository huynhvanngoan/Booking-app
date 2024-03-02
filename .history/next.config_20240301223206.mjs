/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            child_process: false,
            fs: false,
        }

        return config;
    },
};

export default nextConfig;
