import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import  {graphql, StaticQuery} from "gatsby"
import Post from '../components/Post'
import PaginationLinks from "../components/PaginationLinks"
import Helmet from "react-helmet"

function IndexPage () {

  const postsPerPage = 5;
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
 
              <Helmet>
                <title>Aneesh Mistry | Software Engineer</title>
                <meta name="description" content={data.site.siteMetadata.description}/>
                <meta name="keywords" content={data.site.siteMetadata.keywords}/>
                <meta property="og:title" content={data.site.siteMetadata.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content={data.site.siteMetadata.description}/>
                <meta property="og:image" content=""/>
                <meta property="og:locale" content="en_UK"/>
                <meta property="og:url" content="https://www.aneesh.co.uk"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={data.site.siteMetadata.title}/>
                <meta name="twitter:description" content={data.site.siteMetadata.description}/>
                <link rel="canonical" href="https://www.aneesh.co.uk"/>

              </Helmet>
              
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
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
  site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
  allMarkdownRemark(sort: {fields:[frontmatter___date], order:DESC}
    limit: 5

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