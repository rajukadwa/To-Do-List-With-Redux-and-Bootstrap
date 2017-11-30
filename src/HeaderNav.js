import React from 'react';
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import { Link } from 'react-router-dom'


export default class Header extends React.Component{
	render() {
    return(
     <Navbar inverse collapseOnSelect>
		<Navbar.Header>
		  <Navbar.Brand>
			<a href="/">Peak Logo</a>
		  </Navbar.Brand>
		  <Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		  <Nav>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
			<li><Link to='/history'>History</Link></li>
		  </Nav>
		</Navbar.Collapse>
	 </Navbar>
    )
  }
}