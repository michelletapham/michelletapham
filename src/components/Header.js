import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderIcon from '../assets/header-icon.gif'

export default function Header() {
  return (
    <header className="header">
        <a className="button" href="/michelletapham/blog">
          <img className= "header-icon" src={HeaderIcon} alt ="Spirited Away Letter"/>
          <h4>relaxmich</h4>
        </a>
        <Navbar className="justify-content-center">
          <Nav>
              <Nav.Link href="/michelletapham">home</Nav.Link>
              <Nav.Link href="/michelletapham/blog">blog</Nav.Link>
              <Nav.Link href="/michelletapham/photo">photo</Nav.Link>
              <Nav.Link href="/michelletapham/currents">currents</Nav.Link>
              <Nav.Link href="/michelletapham/moodboard">moodboard</Nav.Link>
              <Nav.Link href="/michelletapham/about">about</Nav.Link>
          </Nav>
        </Navbar>
    </header>
  );
}