import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"
class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      scrolled: false,
    }
  }

  render() {
    return (
    
      <Navbar
        fixed="top"
        light
        expand="md"
      >
        <div className="container">
          <NavItem>
            <a  href="/" rel="noopener noreferrer">
              <strong>aneesh.co.uk</strong>
              {/* <i className="fas fa-home fa-2x"></i> */}
            </a>
          </NavItem>

          <div className="ml-auto">
            <Nav>
              <NavItem >
                <NavLink href="/about">
                  <strong>
                    <font>About</font>
                  </strong>
                </NavLink>
              </NavItem>
              <NavItem>
                <a
                  href="https://www.hackerrank.com/4neesh"
                  target="_blank"
                  style={{ paddingTop: "10px" }}
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-hackerrank fa-2x" />
                </a>
              </NavItem>
              <NavItem>
                <a
                  href="https://www.linkedin.com/in/aneeshmistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </NavItem>

              <NavItem>
                <a
                  href="https://www.github.com/4neesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                </a>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Navbar>
  
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
