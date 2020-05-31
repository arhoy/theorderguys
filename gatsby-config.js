require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://theorderguys.com';
} else {
  URL = 'http://localhost:8000';
}

module.exports = {
  siteMetadata: {
    title: 'The Order Guys - Online ordering made easy ',
    description:
      'At The Order Guys we partner with local restaurants to deliver real-time orders for pickup',
    keywords: [
      'online ordering platform',
      'online ordering system',
      'online pickup orders for restaurants',
    ],
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

    `gatsby-plugin-twitter`,

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
