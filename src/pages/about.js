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
            </Col>
            <Col md="6">
              <p></p>
              Hello!
              <p>Thank you for visiting my website. I am Aneesh Mistry, a passionate
                software engineer from London, England. 
              </p>
              <h5>Tech Stack</h5>
              <p>I currently work across the following technologies:</p>
              <h6><u>Back-end</u></h6>
              <ul className="columns" data-columns="2"> 
                <li style={{listStyleType:"disc"}}>Java 8</li>
                <li style={{listStyleType:"disc"}}>Spring</li>
                <li style={{listStyleType:"disc"}}>Node.js</li>
                <li style={{listStyleType:"disc"}}>Hibernate</li>
                <li style={{listStyleType:"disc"}}>GraphQL</li>
                <li style={{listStyleType:"disc"}}>VBA</li>
                <li style={{listStyleType:"disc"}}>MySQL</li>
              </ul>
              <h6><u>Front-end</u></h6>
              <ul > 
                <li style={{listStyleType:"disc"}}>HTML5</li>
                <li style={{listStyleType:"disc"}}>CSS3</li>
                <li style={{listStyleType:"disc"}}>D3.js</li>
                <li style={{listStyleType:"disc"}}>React.js</li>
                <li style={{listStyleType:"disc"}}>JavaScript</li>
              </ul>
              <h6><u>Other</u></h6>
              <ul > 
                <li style={{listStyleType:"disc"}}>Tableau</li>
                <li style={{listStyleType:"disc"}}>Corda certified</li>
              </ul>

              
              </Col>
          </Row>

          <br></br>
        </CardBody>
      </Card>
    </div>
  </Layout>
)

export default AboutPage
