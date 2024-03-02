/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                "fs": false,
                "path": false,
                "os": false,
                "child_process": 'empty',
            }
        }
        return config
    },
};

export default nextConfig;
