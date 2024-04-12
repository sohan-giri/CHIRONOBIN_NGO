import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <Nav>
        <Logo src= "/images/logo.png" />
        <Navbar/>
        
      </Nav>
    </div>
  );
}

export default Header;

const Nav = styled.nav`
  background: #B93E23 ; 
  height : 30%
  
  
`;

const Logo = styled.img`
    width : 30%;
    
`
