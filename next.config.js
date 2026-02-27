/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
 const nextConfig = {
  output: 'standalone',

  reactStrictMode: false,
  /* config options here */
  transpilePackages: ['@bexio/react-wrappers'],
  
};

export default nextConfig;
