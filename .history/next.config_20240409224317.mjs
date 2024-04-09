/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },

    env: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
            "pk_test_51P1u9MAKtjPgIPk2NveUaQdij81mvEveZWK3gny7ewnrO7BlBpFDHsSGqgroqYSMLIV1ZLfCOmSrrILuUHtTefko00qTNHp748",
        NEXT_PUBLIC_DOMAIN: "https://app-71479.on-aptible.com",
    },
    images: {
        remotePatterns: [
          {
            hostname: "imgcld.yatra.com",
          },
          {
            hostname: "content.r9cdn.net",
          },
        ],
};

export default nextConfig;
