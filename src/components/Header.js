import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderIcon from '../assets/header-icon.gif'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
        <Link className="button" to="/blog">
          <img className= "header-icon" src={HeaderIcon} alt ="Spirited Away Letter"/>
          <h4><span role="img" aria-label="sparkle-emoji">✨</span> relaxmich</h4>
        </Link>
        <Navbar className="justify-content-center">
          <Nav>
            <Link to="/">home</Link>
            <Link to="/blog">blog</Link>
            <Link to="/photo">photo</Link>
            <Link to="/moodboard">moodboard</Link>
            <Link to="/about">about</Link>
          </Nav>
        </Navbar>
    </header>
  );
}