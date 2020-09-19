
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
  thumbnail,
  
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
          }
        }
      }
    `
  )

  const imageSrc = thumbnail && thumbnail.childImageSharp.sizes.src;
  const metaDescription = description || site.siteMetadata.description;

  let origin = "https://aneesh.co.uk/"
  if (typeof window !== "undefined"){
    origin = window.location.origin;
  }
  const image = origin + imageSrc
  console.log(image)
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
          content:image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ]
      .concat(meta)
      // .concat(
      //   keywords.length > 0
      //   ? 
      //     {
      //     name: `keywords`,
      //     content: keywords.join(`, `),
      //     }
      //   :[]
        // 
      // )
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
