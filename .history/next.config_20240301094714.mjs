/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    module.exports = {
        webpack5: true,
        webpack: (config) => {
          config.resolve.fallback = { fs: false };
      
          return config;
        },
};

export default nextConfig;
