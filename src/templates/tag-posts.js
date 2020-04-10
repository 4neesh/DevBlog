import React from 'react'
import Layout from "../components/layout"
import Post from "../components/Post"

import { graphql } from "gatsby"

const tagPosts = ({ data, pageContext }) => {

  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark

  const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged "${tag}"`

  return (

    <Layout pageTitle={pageHeader}>
      <div className="container" id="content" >
        <h3>{pageHeader}</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            body={node.excerpt}
            tags={node.frontmatter.tags}
            author={node.frontmatter.author}
            subtitle={node.frontmatter.subtitle}
            time={node.frontmatter.time}
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />

        ))
        }
      </div>
    </Layout>

  )
}


export const tagQuery = graphql`

    query($tag : String!){

        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: { tags : { in: [$tag]}}}
            ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                    author
                  title
                  date(formatString: "Do MMM YYYY")
                  author
                  tags
                  time
                  subtitle
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                fields {
                  slug
                }
            excerpt
              }
            }
          }
    }

`
export default tagPosts