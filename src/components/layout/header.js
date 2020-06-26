import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/" style={linkStyle}>Home</Link> | {' '} 
      <Link to="/about" style={linkStyle}>About</Link>
    </header>
  ) 
}

const headerStyle = {
  background: "#ccc",
  color: "#000",
  fontStyle: "italic",
  textAlign: 'center',
  padding: '0.2rem'
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "bolder"
}

export default Header;