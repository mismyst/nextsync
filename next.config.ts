import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep your image configuration for remote patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Optional: You can add image optimization settings
    // minimumCacheTTL: 60, // Cache optimized images for longer in production
  },
  
  // Production optimizations
  // output: 'export',  // commenting it out becuase creating a problem while runnning 
  // Creates a standalone build that's easier to deploy
  
  poweredByHeader: false, // Removes the X-Powered-By header for security
  
  // Enable React strict mode for better code quality
  reactStrictMode: true,
  
  // Optionally add compression for better performance
  compress: true,
  
  // If you're using webpack, you can add production optimizations
  // webpack: (config, { isServer }) => {
  //   // Custom webpack configurations
  //   return config;
  // },
};

export default nextConfig;
