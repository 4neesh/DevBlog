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
          <NavLink style={{ 'fontSize': '18px' }} href="/" rel="noopener noreferrer">
              <strong>Home</strong>
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink href="/about">
            <strong>
              <font style={{ 'fontSize': '18px' }}>About</font>
            </strong>
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink href="/blogs">
            <strong>
              <font style={{ 'fontSize': '18px' }}>Blogs</font>
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
