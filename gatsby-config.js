module.exports = {
  siteMetadata: {
    title: `Aneesh Mistry | Software Engineer`,
    description: `Aneesh is a software engineer within financial services based in London.`,
    author: `Aneesh Mistry`,
    keywords: `blog, java, spring, algorithms, software engineer, finance`,
    siteUrl:"https://aneesh.co.uk",
  },
  plugins: [

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        
        plugins: [
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                // This is the frontmatter field the title should come from
                field: "title",
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: "DejaVuSansCondensed",
                color: "black", // black|white
                size: 48, // 16|24|32|48|64
                style: "bold", // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to yMargin
              },
              meta: {
                // The parts array is what generates the bottom text
                // Pass an array with strings and objects
                // The following array will generate:
                // "- Author Name » September 13"
                // The objects are used to pull data from your markdown's
                // frontmatter. { field: "author" } pulls the author set
                // in the frontmatter. { field: "category" } would pull
                // the category set. Any field can be used as parts
                // Note: Only pass the "format" property on date fields
                parts: [
                  "- ",
                  { field: "author" },
                  // " » ",
                  // { field: "date", format: "mmmm dS" },
                ],
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: "DejaVuSansCondensed",
                color: "black", // black|white
                size: 24, // 16|24|32|48|64
                style: "normal", // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to cardHeight - yMargin - size
              },

            }
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: 'Blog', // website title
              separator: '|', // default
              author: 'Aneesh Mistry',
              //background: require.resolve('./content/assets/base.png'), // path to 1200x630px file or hex code, defaults to black (#000000)
              titleFontSize: 96, // default
              subtitleFontSize: 60, // default
              useFrontmatterSlug: false // default, if true it will use the slug defined in the post frontmatter
            },
          },
        
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        ],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
