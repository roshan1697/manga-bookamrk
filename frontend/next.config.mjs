/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // This allows any domain
          },
        ],
      },
};

export default nextConfig;
