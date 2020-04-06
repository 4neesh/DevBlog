import React from "react"
import { Card, CardTitle, Badge, Button, CardBody } from 'reactstrap'
import { graphql, StaticQuery } from 'gatsby'
import { slugify } from '../util/utilityFunctions'


const Sidebar = () => (

    < StaticQuery
        query={sideBarQuery}
        render={data => {
            // console.log(data.sitePage.fields.tagsForPosts)
            return (
                <div className="container" id="content">
                    <Card>
                        <CardTitle className="text-center text-uppercase">
                            Browse by Tags
                    </CardTitle>
                        <CardBody>
                            <ul>
                                {data.sitePage.fields.tagsForPosts.map(tag => (

                                    <li key={tag} style={{ marginBottom: '10px' }}>
                                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                                            {tag} <Badge color="light"></Badge>
                                        </Button>
                                    </li>
                                ))}

                            </ul>
                    
                </CardBody>
                    </Card>
                </div>
            )
        }} />

)

const sideBarQuery = graphql`
query MyQuery {
    sitePage {
      fields {
        tagsForPosts
      }
    }
  }
  
  

`
export default Sidebar