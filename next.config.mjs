/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.tailgrids.com','tailwindui.com'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; img-src 'self' data: https://tailwindui.com;", // Add your hostname here
      },
};

export default nextConfig;
