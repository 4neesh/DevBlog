import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  {graphql, StaticQuery} from "gatsby"
import Post from '../components/Post'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                />
              ))}
            </div>
          )
        }}
      />
    
  </Layout>
)

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: {fields:[frontmatter___date], order:DESC}) {
    edges {
      node {
        id
        frontmatter {
          author
          date(formatString: "Do MMM YYYY")
          title
          path
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
