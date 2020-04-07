import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody,CardTitle,  Badge, CardSubtitle } from "reactstrap"
import { Row, Col } from "reactstrap"

const AboutPage = () => (
  <Layout pageTitle="About">
    <div className="container" id="content">
      <Card>
        {/* <Img className="card-image-top" 
                    fluid={post.featuredImage.childImageSharp.fluid} /> */}
<CardTitle className="text-center text-uppercase">
                            <h5><strong>Meet Aneesh</strong></h5>
                        </CardTitle>
        <CardBody>
          <Row>
            <Col md="6">
              <CardSubtitle>
                <span className="text-info">a</span>
              </CardSubtitle>
            </Col>
            <Col md="6">
              <p>Hello!</p>             
              <p>Thank you for visiting my website. I am Aneesh Mistry, a 
                passionate software engineer and graduate. 
              </p>
              
              
              
              </Col>
          </Row>

          <br></br>
        </CardBody>
      </Card>
    </div>
  </Layout>
)

export default AboutPage
