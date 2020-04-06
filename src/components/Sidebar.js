import React from "react"
import { Card, CardTitle, Badge, Button, CardBody } from 'reactstrap'
import { graphql, StaticQuery } from 'gatsby'
import { slugify } from '../util/utilityFunctions'


const Sidebar = () => (

    < StaticQuery
        query={sideBarQuery}
        render={data => {

            return (
                <div className="container" id="content">
                    <Card>
                        <CardTitle className="text-center text-uppercase">
                            <br></br>
                            Browse by Tags
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
                                <li style={{ marginBottom: '10px' }}>
                                    <Button className="text-uppercase" color="primary" href={`/tag/java`}>
                                        Java</Button>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <Button className="text-uppercase" color="primary" href={`/tag/algorithms`}>
                                        Algorithms</Button>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <Button className="text-uppercase" color="primary" href={`/tag/collections`}>
                                        Collections</Button>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <Button className="text-uppercase" color="primary" href={`/tag/personal`}>
                                        Personal</Button>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <Button className="text-uppercase" color="primary" href={`/tag/design`}>
                                        Design</Button>
                                </li>
                            </ul>

                        </CardBody>
                    </Card>
                </div>
            )

        }} />

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