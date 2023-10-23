/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en-US", "en_GB"],
    defaultLocale: "en-US",
  },

  images: {
    domains: [
      "coinbureau.s3.amazonaws.com",
      "coinbureau.s3.us-east-2.amazonaws.com",
      "s3.coinbureau.dev",
      "i.pinimg.com",
      "cb-hub-test.s3.us-east-2.amazonaws.com",
      "s3hub.coinbureau.dev",
      "s3hub-release.coinbureau.dev",
      "img.youtube.com",
      "flagcdn.com",
      "upload.wikimedia.org",
      "coinbureau-hub-dev.s3.eu-central-2.amazonaws.com",
      "vumbnail.com",
      "coinbureau.dev",
      "hub-image.coinbureau.dev",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cb-hub-strapi-test.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cb-hub-test.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "s3hub.coinbureau.dev",
      },
      {
        protocol: "https",
        hostname: "s3hub-release.coinbureau.dev",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },

  env: {
    URL: process.env.URL,
    BASE_URL: process.env.BASE_URL,
    AUTH_BASE_URL: process.env.AUTH_BASE_URL,
    STRIPE_BASE_URL: process.env.STRIPE_BASE_URL,
    PAYPAL_BASE_URL: process.env.PAYPAL_BASE_URL,
    STRIPE_PK: process.env.STRIPE_PK,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  },
};

module.exports = nextConfig;
