import React from "react"
import Layout from "../components/layouts/layout"
import Post from "../components/Post"
import { graphql } from "gatsby"
import PaginationLinks from "../components/PaginationLinks"

const postList = props => {

    const posts = props.data.allMarkdownRemark.edges
    const {currentPage, numberOfPages} = props.pageContext


    return (

<Layout>
      <div className="container" id="content" >
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

        <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
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
