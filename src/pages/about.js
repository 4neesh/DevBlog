import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody,CardTitle } from "reactstrap"
import { Row, Col } from "reactstrap"
import Image from "../components/image"
const AboutPage = () => (
  <Layout pageTitle="About">
    <div className="container" id="content">
      <Card>
        {/* <Img className="card-image-top" 
                    fluid={post.featuredImage.childImageSharp.fluid} /> */}
                        <SEO title="About" />

<CardTitle className="text-center text-uppercase">
                            <h5><strong>Meet Aneesh</strong></h5>
                        </CardTitle>
        <CardBody>
          <Row>
            <Col md="6">
              <Image/>
              
              <p></p>
              Hello!
              <p>Thank you for visiting my website. I am Aneesh Mistry, a passionate
                software engineer from London, England. 
              </p>
              
              
            
                            
            </Col>
            <Col md="6">
              



            <h5 style={{marginTop:"10px"}}>Technology Stack</h5>
              <Row>
                <Col md="4">
                <h6><u>Back-end</u></h6>
              Java<br></br>
              Hibernate<br></br>
              Spring<br></br>
              Node.js<br></br>
              GraphQL<br></br>
              MySQL<br></br>
              VBA<br></br>

                </Col>
                <Col md="4">
                <h6><u>Front-end</u></h6>
              HTML5<br></br>
              CSS3<br></br>
              D3.js<br></br>
              React.js<br></br>
              JavaScript<br></br>

                </Col>
                <Col md="4">
                <h6><u>Services</u></h6>
              Tableau<br></br>
              Corda<br></br>
              AWS<br></br>
              
                </Col>
              </Row>
             
             
             
              </Col>
          </Row>

          <br></br>
        </CardBody>
      </Card>
    </div>
  </Layout>
)

export default AboutPage
