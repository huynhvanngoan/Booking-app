/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    env: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
            "pk_test_51OzDnD06zCFeRbg3IkQ8hLMdTp7BaFRrRXW9sSaLKLrmVTBQlC94ij9i1jVZS1QWkX3sHynp4JEnhDLAy56UJnkx00opAlc5VD",
        NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
    },
    images: {
        remotePatterns: [{ hostname: "imgcld.yatra.com" }],
    },
};

export default nextConfig;
