
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import {
  Collapse,

  NavbarToggler,
 
  Image,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends React.Component{
constructor(props){
  super(props)
  this.toggle= this.toggle.bind(this)
  this.state = {
    isOpen: false,
  }
}
  toggle (){
    this.setState({
      isOpen : !this.state.isOpen
    });
  } 

  render(){
  return (
    <div >
      {/* <Navbar fixed="top" light expand="sm">
        <div className="container">
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/team">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.hackerrank.com/4neesh">Hacker Rank</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/aneeshmistry/">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/4neesh">
                Github
              </NavLink>
            </NavItem>
            
          </Nav>

        </div>
        
      </Navbar> */}
      <Navbar fixed="top" bg="dark" variant="dark">
<div className="container">
    <Navbar.Brand href="#home">
      <img
        alt="###"
        src="../images/GitHubIcon.png"
        width="30"
        height="30"
        
      />{' '}
      Aneesh Dev
  
    </Navbar.Brand>
    </div>
          </Navbar>
    </div>
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
