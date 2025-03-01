/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/', // The root path
          destination: '/home', // Redirect to /home
          permanent: true, // Use true for a permanent redirect (301)
        },
      ];
    },
  };

export default nextConfig;
