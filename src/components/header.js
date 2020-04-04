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

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (

      <Navbar fixed="top" light expand="md" >
        <div className="container">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.state.isOpen} navbar />
          
          <div className="ml-auto" navbar>
            <Nav className="mr-2" >
              <NavItem>
              <a href="https://www.hackerrank.com/4neesh"
                target="_blank"
                className="facebook"
                rel="noopener noreferrer">
                <i className="fab fa-hackerrank fa-2x" />
              </a>
              </NavItem>
              <NavItem>
              <a href="https://www.linkedin.com/in/aneeshmistry/" 
                        target="_blank" 
                        className="facebook"
                        rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x"/>
                    </a>
              </NavItem>
              <NavItem>
              <a  href="https://www.twitter.com/aneesh_95/" 
                        target="_blank" 
                        className="facebook"
                        rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-2x"/>
                    </a>
                
              </NavItem>
              <NavItem>
              <a  href="https://www.github.com/4neesh" 
                        target="_blank" 
                        className="facebook"
                        rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x"/>
                    </a>
              </NavItem>
              
              <NavItem>
                <NavLink href="/about">About</NavLink>
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
