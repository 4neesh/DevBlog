import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    // this.toggle = this.toggle.bind(this)
    // this.state = {
    //   isOpen: false,
    // }
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   })
  // }

  render() {
    return (

      <Navbar fixed="top" light expand="md" >
        <div className="container">
          <NavbarBrand href="/">Aneesh Dev Blog</NavbarBrand>
          {/* <NavbarToggler onClick={this.state.isOpen} navbar /> */}

          <div className="ml-auto" navbar>
            <Nav>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem >
                <a href="https://www.hackerrank.com/4neesh"
                  target="_blank"
                  style={{"padding-right":"15px"}}
                  rel="noopener noreferrer">
                  <i className="fab fa-hackerrank fa-2x" />
                </a>
              </NavItem>

              <NavItem>
                <a href="https://www.linkedin.com/in/aneeshmistry/"
                  target="_blank"
                  style={{"padding-right":"15px"}}
                  rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </NavItem>

              
              <NavItem>
                <a href="https://www.github.com/4neesh"
                  target="_blank"
                  style={{"padding-right":"0",color:"black"}}
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
