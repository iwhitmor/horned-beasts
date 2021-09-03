import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return( 
      <header>
         <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Horned Beasts</Navbar.Brand>
        </Navbar>
      </header>
    )}
  }

export default Header;