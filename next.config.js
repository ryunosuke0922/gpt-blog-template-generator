/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: false, // <- trueだと効かない
};

module.exports = nextConfig;
