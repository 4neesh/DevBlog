
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ 
  description,
  subtitle, 
  lang, 
  meta, 
  title, 
})
  {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  
  const metaDescription = description || site.siteMetadata.description;
  const { slugify } = require('../util/utilityFunctions')
  let origin = "https://aneesh.co.uk/"
  if (typeof window !== "undefined"){
    origin = window.location.origin;
  }


  var isHome = (title === "Home")
  const url = isHome ? `${origin}`: `${origin}/${slugify(title)}`
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      description={subtitle}

      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property:`og:image`,
          content: `${site.siteMetadata.siteUrl}/${slugify(title)}/twitter-card.jpg`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name:`twitter:site`,
          content:`@Anee5h`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}/${slugify(title)}/twitter-card.jpg`,
        },
      ]
      .concat(meta)
    }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  // keywords: PropTypes.arrayOf(PropTypes.string)
}

export default SEO
