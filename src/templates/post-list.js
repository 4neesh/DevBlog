import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import { graphql } from "gatsby"

const postList = props => {

    const posts = props.data.allMarkdownRemark.edges
    // const { tag } = pageContext
    // const { totalCount } = data.allMarkdownRemark
    const {currentPage, numberOfPages} = props.pageContext
    // const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged "${tag}"`


    return (

        // <Layout pageTitle={pageHeader}>
        <Layout>
      <div className="container" id="content" >
        {/* <h3>{pageHeader}</h3> */}
        {posts.map(({ node }) => (
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

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

export default postList
