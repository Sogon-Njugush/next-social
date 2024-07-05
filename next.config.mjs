/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn3.pixelcut.app"
      },{
        protocol:"https",
        hostname:"cdn.pixelcut.app"
      },{
        protocol:"https",
        hostname:"img.clerk.com"
      }
    ]
  }
};

export default nextConfig;
