/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    env: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: "pk_test_xeqIPdYS2PpKbHmKG4gJqpde",
        NEXT_PUBLIC_APTIBLE_DOMAIN: "https://app-66707.on-aptible.com",
      },
};

export default nextConfig;
