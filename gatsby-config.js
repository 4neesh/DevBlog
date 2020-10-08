module.exports = {
  siteMetadata: {
    title: `Aneesh Mistry | Software Engineer`,
    description: `Aneesh is a software engineer within financial services based in London.`,
    author: `Aneesh Mistry`,
    keywords: `blog, java, spring, algorithms, software engineer, finance`,
    siteUrl:`https://aneesh.co.uk`,
  },
  plugins: [

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://aneesh.us8.list-manage.com/subscribe/post?u=f3fabd8a5e7676e82b093004b&amp;id=d5cbf8e826',
      },
  },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
                
            },
          },
          // basic social card below
           {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                color: "black", 
              },
              meta: {
                parts: [

                  "aneesh.co.uk | developer blog",
                 
                ],
                font: "DejaVuSansCondensed",
                color: "white", 
                y: 260, 
                size: 32,
              },
              background: '#6db3e8'
            }
          }
          // {
            
          //     resolve: `gatsby-remark-twitter-cards`,
          //     options: {
          //       title: 'developer blog',
          //       separator: '|', 
          //       author: 'Aneesh Mistry',
          //       background: require.resolve('./src/images/social-card-background.jpg'), // path to 1200x630px file
          //       fontColor: '#0d1b94', 
          //       titleFontSize: 160, 
          //       subtitleFontSize: 75,
          //       fontStyle: 'monospace', // default
          //       fontFile: require.resolve("./src/images/TitilliumWeb-Regular.ttf"), 

          //     },
          // },
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/logo_icon.png"
        // This path is relative to the root of the site.
      },
    },

  ],
}
