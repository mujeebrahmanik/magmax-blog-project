/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    devIndicators: {
      autoPrerender: false,
      buildActivity: false,
    },
  images: {
    remotePatterns: [
      
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
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
