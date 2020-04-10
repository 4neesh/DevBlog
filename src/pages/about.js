import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Row, Col } from "reactstrap"
import AboutImage from "../components/aboutImage"

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
         
              <h2>Hi! I'm Aneesh</h2>
              <p>Thank you for visiting my website.</p>
              <p>
                I am a software engineer and enjoy building tools and applications with tech. 
              </p>
              <p>
                I completed my bacherlors degree in Banking, Finance, and Management at Loughborough University in 2017. The degree  
                included one year in industry where I obtained experience developing tools within the Fixed Income team 
                at UBS Asset Management. UBS introduced me to software development that I quickly obtained a passion for. I decided 
                to pursue software development further, and in 2018 I graduated from The University of St Andrews with a 
                Master's degree in Computer Science.
              </p>
              <p>
                I currently work for Accenture as a software engineer. I have been able to build upon my skills with Java 
                and AWS, I have also been involved with the Accenture Blockchain community of practice. 
                I work within the financial services industry as my interest and experience from my bachelors degree supports me.
              </p>
              <p>
                From a young age, I spend my free time playing golf; at the heights of my amateur career, I represented my 
                University and Middlesex County in tournaments across the UK. I currently have a handicap of 3. 
              </p>

           
                    <AboutImage/>
                   

            

          <br></br>
        </CardBody>
      </Card>
    </div>
  </Layout>
)

export default AboutPage
