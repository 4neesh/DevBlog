import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"
import { Row, Col } from "reactstrap"
import Sidebar from "./Sidebar"
// import Brand from "./brand"
import yourSVG from "../images/logo.svg"
const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
         
        }
      }
      
    }
  `}
    render={data => (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <Header/>

        <div className="container" id="content" >
        <img alt = "Aneesh Dev Blog" style={{width: "100%",  marginTop: "30px"}}src={yourSVG}/>

          {/* <h1>{data.site.siteMetadata.title}</h1> */}
          {/* <Brand/> */}
          <h4 align="center" style={{marginTop:"10px"}}>Java · AWS · Spring</h4>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4"><Sidebar/></Col>
          </Row>
        </div>
        <Footer />
      </>



    )}
  />


)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
