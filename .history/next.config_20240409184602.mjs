/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds
    },
    env: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
            "pk_test_51P1u9MAKtjPgIPk2NveUaQdij81mvEveZWK3gny7ewnrO7BlBpFDHsSGqgroqYSMLIV1ZLfCOmSrrILuUHtTefko00qTNHp748",
        NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
    },
    images: {
        remotePatterns: [{ hostname: "imgcld.yatra.com" }],
    },
};

export default nextConfig;
