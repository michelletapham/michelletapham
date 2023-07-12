import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavigationBarIcon from '../assets/navigation/nav-icon.gif'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
        <Link className="button" to="/blog">
          <img className= "navigation-bar-icon" src={NavigationBarIcon} alt ="Spirited Away Letter"/>
          <h4><span role="img" aria-label="sparkle-emoji">✨</span> relaxmich</h4>
        </Link>
        <Navbar className="justify-content-center">
          <Nav>
            <Link to="/">home</Link>
            <Link to="/blog">blog</Link>
            <Link to="/photo">photo</Link>
            <Link to="/about">about</Link>
          </Nav>
        </Navbar>
    </nav>
  );
}