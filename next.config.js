/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["api.dicebear.com"],
        dangerouslyAllowSVG: true,
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
