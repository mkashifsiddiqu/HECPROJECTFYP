/* eslint-disable prettier/prettier */
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Login',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  typescript:{
    ignoreBuildErrors:true
  },
  eslint: {
    ignoreDuringBuilds: true,
  } 
};
