import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
/*Bootstrap styles */
import 'bootstrap/dist/css/bootstrap.min.css';

export const HeaderNav = () => {
  return (
          <Navbar collapseOnSelect expand="lg" bg="none" variant='dark'>
                {/* <Navbar.Brand href="/home"><span>{"<s1/>"}</span></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="justify-content-end" style={{ width: "100%" }}>
                  {/*ver si puedo cambiar este nav link por el de react para que el cambio sea mas lindo que el href, sino buscar alguno hecho */}
                    <Nav.Link active={window.location.pathname === "/" || window.location.pathname === "/home" ? true : false } href='/home'>Home</Nav.Link>
                    <Nav.Link active={window.location.pathname === "/about" ? true : false} href='/about'>About</Nav.Link>
                    <Nav.Link active={window.location.pathname === "/skills" ? true : false}  href='/skills'>Skills</Nav.Link>
                    <Nav.Link active={window.location.pathname === "/contact" ? true : false} href='/contact'>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
           </Navbar>
  )
}