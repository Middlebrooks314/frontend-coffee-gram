import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
// import WhiteCoffeeGramLogo from '../assets/WhiteCoffeeGramLogo.svg'


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"> CoffeeGram </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Favorites">Favorites</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar
