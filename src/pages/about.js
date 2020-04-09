import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Row, Col } from "reactstrap"

const AboutPage = () => (
  <Layout pageTitle="About">
    <div className="container" id="content">
      <Card>
        {/* <Img className="card-image-top" 
                    fluid={post.featuredImage.childImageSharp.fluid} /> */}
        <SEO title="About" />

        <CardTitle className="text-center text-uppercase">
          <h5>
            <strong>Meet Aneesh</strong>
          </h5>
        </CardTitle>
        <CardBody>
          <Row>
            <Col md="7">
              <p></p>
              Hello!
              <p>
                Thank you for visiting my website.
              </p>
            </Col>
            <Col md="5">
           
            </Col>
          </Row>

          <br></br>
        </CardBody>
      </Card>
    </div>
  </Layout>
)

export default AboutPage
