import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import { Card, CardBody, Badge, CardSubtitle, CardTitle } from 'reactstrap'
import LayoutPost from '../components/layouts/layoutPost'
import SharePost from '../components/sharePost'

const SinglePost = ({  pageContext, data }) => {
    const post = data.markdownRemark.frontmatter

    return (
        <LayoutPost  pageTitle={post.title} >
            <div className="container" id="content" 
>
              
            <SEO
                title={post.title}
                description={post.subtitle}
                subtitle={post.subtitle}
                   />
        
            <Card>
                <CardBody>
                <CardTitle className="postTitle">{post.title}</CardTitle>    

                    <CardSubtitle>
                        <span className="postSubtitle">{post.date}</span> by{' '}
                        <span className="postSubtitle">{post.author}</span>
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
           
            <SharePost post={post} pageContext={pageContext}/>
            </div>
        </LayoutPost >
    )

}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        site {
            siteMetadata {
              title
              siteUrl
            }
          }
        markdownRemark(fields:{slug: {eq : $slug}}){
            id
            html
            frontmatter{
                title
                subtitle
                author
                date(formatString: "Do MMM YYYY")
                tags
            }
        }
    }

`

export default SinglePost