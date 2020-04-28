require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://codepaper.dev';
} else {
  URL = 'http://localhost:8000';
}

// const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: 'Codepaper - Web development, SEO, Digital Ads',
    titleTemplate: 'Codepaper - Web development, SEO, Digital Ads',
    description:
      'At Codepaper we deliver blazingly fast high performance websites, stunning web design, effective online advertising and seo and business signs',
    author: 'Alex Quasar',
    twitterUsername: '@_aquasar',
    image: '/default.png',
    url: URL,
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify-cache',
    },

    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.GATSBY_BUTTER_API_TOKEN,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,500,600,700`,
          `Helvetica\:100,300,500,600,700`,
          `Montserrat\:400,500,600,700`,
        ],
        display: 'swap',
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-stripe`,
    // },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: [
    //       'Balance',
    //       'BalanceTransaction',
    //       'Product',
    //       'ApplicationFee',
    //       'Sku',
    //       'Subscription',
    //     ],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   },
    // },
    `gatsby-plugin-twitter`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: frame-ancestors 'self' https://*.public.tableau.com/",
            'X-Frame-Options: ALLOW-FROM https://public.tableau.com/',
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    },
  ],
};
