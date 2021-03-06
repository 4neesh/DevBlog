import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "../../styles/index.scss"
import Header from "../header"
import Footer from "../footer"
import { Helmet } from "react-helmet"



const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery3 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

      
    render={data => (
     
      <>
      <Helmet>
        <title>{children.title}</title>

      </Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />

        <Header />

        <div className="container" id="content">

          {children}
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
