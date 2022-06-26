import React, {useEffect, useState} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
/*Bootstrap styles */
import 'bootstrap/dist/css/bootstrap.min.css';


export const HeaderNav = () => {  

  const [baseUrl,setBaseUrl] = useState('');

  useEffect(() => {
    if(process.env.NODE_ENV === 'production'){
      setBaseUrl(process.env.REACT_APP_URL_PROD);
    }
  },[]);

  const [active, setActive] = useState('default');

  return (
          <Navbar collapseOnSelect expand="lg" bg="none" variant='dark'>
                {/* <Navbar.Brand href="/home"><span>{"<s1/>"}</span></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="justify-content-end nav"
                  activeKey={active}
                  onSelect={(selectedKey) => setActive(selectedKey)}
                 >
                    <Nav.Link eventKey="default" href={baseUrl + '#/home'}>Home</Nav.Link>
                    <Nav.Link eventKey="link-1" href={baseUrl + '#/about'}>About</Nav.Link>
                    <Nav.Link eventKey="link-2" href={baseUrl + '#/skills'}>Skills</Nav.Link>
                    <Nav.Link eventKey="link-3" href={baseUrl + '#/contact'}>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
           </Navbar>
  )
}