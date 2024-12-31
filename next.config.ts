import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'images.pexels.com'], // Add both domains for flexibility
  },
};

export default nextConfig;
