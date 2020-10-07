import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "golf.png" }) {
        childImageSharp {
         
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img  rel="noopener noreferrer" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image