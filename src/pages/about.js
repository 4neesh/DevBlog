import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle } from "reactstrap"
import AboutImage from "../components/aboutImage"

const AboutPage = () => (
  <Layout pageTitle="About">
    <div className="container" id="content">
      
      <Card>
        {/* <Img className="card-image-top" 
                    fluid={post.featuredImage.childImageSharp.fluid} /> */}
        <SEO title="About" />

        <CardTitle className="text-center">
          <h2>Hello! I'm Aneesh       
          </h2>
        </CardTitle>
        <CardBody>
          <p>Thank you for visiting my website.</p>
          <p>
            I am a software engineer and enjoy building tools and applications
            with tech.
          </p>
          <p>
            I completed my bachelors degree in Banking, Finance, and Management
            at{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.lboro.ac.uk/"
              target="_blank"
            >
              <strong>Loughborough University</strong>
            </a>{" "}
            in 2017. The degree included one year in industry where I obtained
            experience developing tools within the Fixed Income team at UBS
            Asset Management. My introduction to software development sparked 
            a passion that I am continuing to pursue. In 2018 I graduated from{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.st-andrews.ac.uk/"
              target="_blank"
            >
              <strong>The University of St Andrews</strong>
            </a>{" "}
            with a Master's degree in Computer Science.
          </p>
          <p>
            I currently work for Accenture as a software engineer. I have been
            able to build upon my skills in many areas, but focussing specifically with
            Java and AWS. I continue to broaden my understanding of financial
            services; I am a committee member of the UKI Accenture Blockchain
            community of practice and work predominantly with financial services
            clients.
          </p>
          <p>
            Outside engineering, I play golf. Golf has been a hobby from a young age that I carry through today; at the height
            of my amateur career, I represented my respective University as well as Middlesex
            County in tournaments across the UK. I currently have a handicap of
            3.
          </p>
          <AboutImage />
        </CardBody>
      </Card>
    </div>
  </Layout>
)

export default AboutPage
