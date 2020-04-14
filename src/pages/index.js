import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  {graphql, StaticQuery} from "gatsby"
import Post from '../components/Post'
import PaginationLinks from "../components/PaginationLinks"

const IndexPage = () => {

  const postsPerPage = 4;
  let numberOfPages
return(
  <Layout>
    <SEO title="Home" />
  
      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
                    
          return (
            <div className="container" id="content" >
 
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                  subtitle={node.frontmatter.subtitle}
                  time={node.frontmatter.time}
                />
              ))}
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />


            </div>
          )
        }}
      />
     
    
  </Layout>
)
}

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: {fields:[frontmatter___date], order:DESC}
    limit: 4

    ) {
      totalCount
    edges {
      node {
        id
        frontmatter {
          author
          date(formatString: "Do MMM YYYY")
          title
          tags
          time
          subtitle
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