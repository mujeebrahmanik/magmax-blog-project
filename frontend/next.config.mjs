/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  devIndicators: {
    autoPrerender: false,
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magmax-blog-project.onrender.com',
        port: '',
        pathname: '/media/**',
      },
    ],
    unoptimized: true, 
  },
};

export default nextConfig;