/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // reactStrictMode: false,
    env: {
        AUTH_SECRET: process.env.AUTH_SECRET,
    },
    images: {
        remotePatterns: [
            // url: 'https://res.cloudinary.com/dqjfskfxu/image/upload/v1722675310/ihhxpjywrp8js43bunbq.png',
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dqjfskfxu/image/upload/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
        ],
    },
};
export default nextConfig;
