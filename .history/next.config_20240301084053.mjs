/** @type {import('next').NextConfig} */
const nextConfig = {
    --experimental-worker: {
        instrumentationHook: true,
    },
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                "fs": false,
                "path": false,
                "os": false,
                "child_process": false,
            }
        }
        return config
    },
};

export default nextConfig;
