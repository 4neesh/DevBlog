import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import { Card, CardBody, Badge, CardSubtitle } from 'reactstrap'
import Img from "gatsby-image"
import Helmet from "react-helmet"


const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter
    const basicUrl = "http://aneesh.co.uk/"
    return (
        <Layout pageTitle={post.title}>
            <div className="container" id="content" >
            <SEO title={post.title} />
           <Helmet>
               <title>{post.title}</title>
               <meta name={post.subtitle}/>
           </Helmet>
            <Card>
                <Img className="card-image-top" 
                    fluid={post.featuredImage.childImageSharp.fluid} />
                    
                <CardBody>
                    <CardSubtitle>
                        <span className="text-info">{post.date}</span> by{' '}
                        <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <ul className="post-tags">
                        {post.tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge className="text-uppercase" color="info">{tag}</Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <br></br>
                </CardBody>
            </Card>
            <h3 className="text-center">Share this post</h3>
            <div className="text-center social-share-links">
                <ul>
                    <li><a
                        href={
                            'https://www.facebook.com/sharer/sharer.php?u=' +
                            basicUrl +
                            pageContext.slug
                        } className="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f fa-2x" />
                    </a></li>
                    <li><a
                        href={
                            'https://twitter.com/share?url=' +
                            basicUrl +
                            pageContext.slug +
                            '&text=' +
                            post.title +
                            '&via' +
                            'twitterHandle'
                        }
                        className="twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-2x" />
                    </a></li>
                    <li><a
                        href={
                            'https://www.linkedin.com/shareArticle?url=' +
                            basicUrl +
                            pageContext.slug
                        }
                        className="linkedin" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x" />
                    </a></li>
                  
                </ul>


            </div >
            </div>
        </Layout >
    )

}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields:{slug: {eq : $slug}}){
            id
            html
            frontmatter{
                title
                subtitle
                author
                date(formatString: "Do MMM YYYY")
                tags
                featuredImage{
                    childImageSharp{
                      fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
            }
        }
    }

`

export default SinglePost