import React from "react"
import { Card, CardTitle, Badge, Button, CardBody } from "reactstrap"
import { graphql, StaticQuery } from "gatsby"


const Sidebar = () => (
  <StaticQuery
    query={sideBarQuery}
    render={data => {
      return (
        <div className="container" id="content">
          <Card className="sidebarCard">
            <CardTitle className="text-center text-uppercase">
              <h5>
                <strong>View Blogs by Tag</strong>
              </h5>
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
                  <Button
                    className="tagButton"
                    href={`/tag/design`}
                  >
                    Design ~ <Badge color="light">{` 2`}</Badge>
                  </Button>
                </li>
                <li>
                  <Button
                    className="tagButton"
                    href={`/tag/algorithms`}
                  >
                    Algorithms ~ <Badge color="light">{` 1`}</Badge>
                  </Button>
                </li>
                <li>
                  <Button
                    className="tagButton"
                    href={`/tag/collections`}
                  >
                    Collections ~ <Badge color="light">{` 1`}</Badge>
                  </Button>
                </li>
                <li>
                  <Button className="tagButton"  href={`/tag/java`}>
                    Java ~ <Badge color="light">{` 2`}</Badge>
                  </Button>
                </li>
                <li>
                  <Button
                    className="tagButton"
                    href={`/tag/personal`}
                  >
                    Personal ~ <Badge color="light">{` 1`}</Badge>
                  </Button>
                </li>
                <li>
                  <Button
                    className="tagButton"
                    href={`/tag/data-structures`}
                  >
                    Data Structures ~ <Badge color="light">{` 1`}</Badge>
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
