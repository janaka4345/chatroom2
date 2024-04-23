// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        // pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        // pathname: '/u/**',
      },
    ],
  },
}