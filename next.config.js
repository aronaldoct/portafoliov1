/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withPWA = require('next-pwa')({
  dest: 'public', 
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  ...nextConfig, // Combina las configuraciones
});
