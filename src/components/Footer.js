import React from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Author: Ian Whitmore</Navbar.Brand>
        </Navbar>
      </footer>
    )}
  }

export default Footer;