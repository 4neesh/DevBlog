import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from 'reactstrap'


const AboutPage = () => (
  <Layout pageTitle="About">
  <Card>
    <SEO title="About" />
    <div>
   <br></br>
    <p>
      Hello this is Aneesh's web page
    </p>
    </div>
    </Card>
  </Layout>
)

export default AboutPage
