import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  {graphql, StaticQuery} from "gatsby"
import Post from '../components/Post'
import {Row, Col} from "reactstrap"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Row>
      <Col md="8">
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
                  fluid={node.frontmatter.featuredImage}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          )
        }}
      />
      </Col>
      <Col md="4">
      <div>
        <Sidebar/>
      </div>
     
   
      </Col>
    </Row>
    
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
          tags
          featuredImage{
            childImageSharp{
              sizes(maxWidth: 600){
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
