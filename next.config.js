/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "flyclipart.com",
      "icon-library.com",
      "images.squarespace-cdn.com",
      "links.papareact.com",
      "image.tmdb.org",
    ],
  },
};
