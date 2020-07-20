import React from "react"
import { Card, CardTitle, Button, CardBody } from "reactstrap"
import { graphql, StaticQuery } from "gatsby"
import MailChimp from "./mailChimp"


const Sidebar = () => (
  <StaticQuery
    query={sideBarQuery}
    render={data => {
      return (
        <div className="container" id="content">
            <Card>
         <CardTitle className="newslettertitle">
              
                <strong>Subscribe to new posts</strong>
              
            </CardTitle>
           <CardBody>

            <MailChimp/>
            </CardBody>
         </Card>
          <Card className="sidebarCard">
            <CardTitle className="viewBlogsHeadline">
              
                <strong>View Blogs by Tag</strong>
             
            </CardTitle>
            <CardBody>
              {/* {data.allMarkdownRemark.edges.map(({node}) => (

                                    <li key={node.fields.postTagsAll} style={{ marginBottom: '10px' }}>
                                        <Button className="text-uppercase" color="primary" href={`/tag/${slugify(node.fields.postTagsAll)}`}>
                                            {node.fields.postTagsAll} <Badge color="light"></Badge>
                                        </Button>
                                    </li> */}

              {/* <ul>
                                {data.sitePage.fields.tagsForPosts.map(tag => (

                                    <li key={tag} style={{ marginBottom: '10px' }}>
                                        <Button className="text-uppercase" color="primary" href={`/tag/${slugify(tag)}`}>
                                            {tag} <Badge color="light"></Badge>
                                        </Button>
                                    </li>
                                ))}

                            </ul> */}
              <ul>
                <li>
                  <Button className="tagButton" href={`/tag/algorithms`}>
                    Algorithms 
                  </Button>
                </li>
                <li>
                  <Button className="tagButton" href={`/tag/databases`}>
                    Databases 
                  </Button>
                </li>  
                <li>
                  <Button className="tagButton" href={`/tag/data-structures`}>
                    Data Structures 
                  </Button>
                </li>
                <li>
                  <Button className="tagButton" href={`/tag/java`}>
                    Java 
                  </Button>
                </li>
                <li>
                  <Button className="tagButton" href={`/tag/microservices`}>
                    Microservices 
                  </Button>
                </li>  

                <li>
                  <Button className="tagButton" href={`/tag/multi-threading`}>
                    Multi-threading 
                  </Button>
                </li> 

                <li>
                  <Button className="tagButton" href={`/tag/patterns`}>
                    Patterns 
                  </Button>
                </li> 
                <li>
                  <Button className="tagButton" href={`/tag/personal`}>
                    Personal 
                  </Button>
                </li>
              
                <li>
                  <Button className="tagButton" href={`/tag/spring`}>
                    Spring 
                  </Button>
                </li>               
              </ul>
            </CardBody>
          </Card>
       
        </div>
      )
    }}
  />
)

const sideBarQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            postTagsAll
          }
        }
      }
    }
    sitePage {
      fields {
        tagsForPosts
      }
    }
  }
`
export default Sidebar
