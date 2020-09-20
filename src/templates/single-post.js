import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import { Card, CardBody, Badge, CardSubtitle, CardTitle } from 'reactstrap'
// import Img from "gatsby-image"
import Helmet from "react-helmet"
import LayoutPost from '../components/layoutPost'

const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter
    const basicUrl = "https://aneesh.co.uk/"
    const thumbnail = post.thumbnail

    const imageSrc = thumbnail && thumbnail.childImageSharp.sizes.src;
    let origin = ""
    if (typeof window !== "undefined"){
      origin = window.location.origin;
    }
    const image = origin + imageSrc


    return (
        <LayoutPost  pageTitle={post.title}>
            <div className="container" id="content" >
              
            <SEO
                title={post.title}
                description={post.subtitle}
                thumbnail={thumbnail}
                
            />
           <Helmet>
               <title>{post.title}</title>
               <meta name="description" content={post.subtitle}/>
               <meta property="og:title" content={post.title} key="ogtitle"/>
               <meta property="og:description" content={post.description} key="ogdesc"/>
               <meta property="description" content={post.description}/>
                <meta name="keywords" content={post.tags}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={image}/>
                <meta property="og:locale" content="en_UK"/>
                <meta property="og:url" content={`${basicUrl}${pageContext.slug}`}/>
                <link rel="canonical" href={`${basicUrl}${pageContext.slug}`}/>
              
           </Helmet>

            <Card>
                {/* <Img className="card-image-top" 
                    fluid={post.featuredImage.childImageSharp.fluid} /> */}
                <CardBody>
                <CardTitle className="postTitle">{post.title}</CardTitle>    

                    <CardSubtitle>
                        <span className="text-info">{post.date}</span> by{' '}
                        <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <ul className="post-tags">
                        {post.tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge className="postBadge">{tag}</Badge>
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
        </LayoutPost >
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
                thumbnail {
                    childImageSharp {
                      sizes(maxWidth: 600) {
                        ...GatsbyImageSharpSizes
                      }
                    }
                  }
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