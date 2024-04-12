import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex; 
    justify-content: flex-end;
  }

  li {
    margin-left: 20px; 
    align-items :center
  }

  a {
    color: white; 
    text-decoration: none; 
  }
`;

function Navbar() {
  return (
    <Nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Donation">Donation</Link></li>
      </ul>
    </Nav>
  );
}

export default Navbar;
