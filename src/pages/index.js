import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  {graphql, StaticQuery} from "gatsby"
import Post from '../components/Post'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br>
    </br>
    
    {/* <Row>
      <Col md="8"> */}
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  image={node.frontmatter.image}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          )
        }}
      />
      {/* </Col>
      <Col md="4">
      <div>
        <Sidebar/>
      </div>
     
   
      </Col>
    </Row> */}
    
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
          tags
          image
          featuredImage{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
