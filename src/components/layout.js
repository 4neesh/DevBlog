import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"
import { Row, Col } from "reactstrap"
import Sidebar from "./Sidebar"
import StickyHeader from "./stickyHeader"




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
        <Header />

        {/* //insert sticky header */}

        <div className="container" id="content">
          <StickyHeader/>
       {/* {window.location.href==="http://localhost:8001/" ? <StickyHeader/> : null} */}
       
          {/* <BrowserRouter><Route exact path="/" component={StickyHeader}/></BrowserRouter> */}
         
          {/* {location.pathname === "/" ? <StickyHeader /> : null} */}

          <Row>
            <Col md="7">{children}</Col>
            <Col md="5">
              <Sidebar />
            </Col>
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
