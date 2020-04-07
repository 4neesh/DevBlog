import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'


class Header extends React.Component {

  render() {
    return (

      <Navbar fixed="top" light expand="md" >
        <div className="container" >
          <NavbarBrand href="/"><i class="fas fa-home fa-lg"></i></NavbarBrand>
          <div className="ml-auto" navbar>
            <Nav>
              <NavItem>
                <NavLink href="/about">
                  <strong>
                    <font size="+1">
                      About
                    </font>
                  </strong>
                </NavLink>
              </NavItem>
              <NavItem >
                <a href="https://www.hackerrank.com/4neesh"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-hackerrank fa-2x" />
                </a>
              </NavItem>
              <NavItem>
                <a href="https://www.linkedin.com/in/aneeshmistry/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </NavItem>
              <NavItem>
                <a href="https://www.twitter.com/aneesh_95/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-twitter fa-2x" />
                </a>
              </NavItem>
              <NavItem>
                <a href="https://www.github.com/4neesh"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-github fa-2x" />
                </a>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Navbar >

    

    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
