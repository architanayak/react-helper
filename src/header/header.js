import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Nav>
            <div className='nav'>
              <NavItem>
                <Link to='/upload-image'>Demo to upload Image</Link>
              </NavItem>
            </div>
            <div className='nav'>
              <NavItem>
                <Link to='/upload-image-npm'>Demo to upload Image using npm</Link>
              </NavItem>
            </div>
            <div className='nav'>
              <NavItem>
                <Link to='/example-using-redux'>Demo using Redux</Link>
              </NavItem>
            </div>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;
