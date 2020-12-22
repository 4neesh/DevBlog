import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import Image from "./image"



const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
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
        <title>Aneesh Mistry Blog</title>

      </Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />

        <Header />
        <div className="home-container" id="content">
            <span style={{borderBottom:"3px solid black", paddingBottom:"8px"}}>
            <div className="stickyHeaderImage">
            <Image/>
          </div>
            <h1 >Aneesh Mistry</h1>

            <h2>Software Engineer Blog</h2>
            </span>
            <span style={{paddingTop:"15px"}}>
                <a
                  href="https://www.linkedin.com/in/aneeshmistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{paddingRight:"30px", color:"black"}}
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
            
                <a
                  href="https://www.github.com/4neesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{paddingRight:"30px", color:"black"}}

                >
                  <i className="fab fa-github fa-2x" />
                </a>

                <a
                href="http://feeds.feedburner.com/aneeshBlog"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color:"black"}}
                >
                <i class="fas fa-rss fa-2x"/>
                    
                </a>
                </span>
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
