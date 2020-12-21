import PropTypes from "prop-types"
import React from "react"

import { Navbar, NavItem, NavLink } from "reactstrap"
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
        light
        expand="md"
               
      >
          <NavItem>
            <NavLink>
            <a  style={{'font-size':'18px'}} href="/" rel="noopener noreferrer">
              <strong>Home</strong>
              {/* <i className="fas fa-home fa-2x"></i> */}
            </a>
            </NavLink>
          </NavItem>
              <NavItem >
              <NavLink href="/about">
                  <strong>
                    <font style={{'font-size':'18px'}}>About</font>
                  </strong>
                </NavLink> 
              </NavItem>
              <NavItem >
              <NavLink href="/blogs">
                  <strong>
                    <font style={{'font-size':'18px'}}>Blogs</font>
                  </strong>
                </NavLink>              
              </NavItem>
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
