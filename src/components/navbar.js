import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const navbar = () => {
    return (
        <Navbar style={{backgroundColor: "darkgrey"}} expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
           
            <Nav.Link href="search">Search History</Nav.Link>
            
            <Nav.Link href="link">Category</Nav.Link>

            <Nav.Link href="map">Map</Nav.Link>
          </Nav>
      
        </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar
