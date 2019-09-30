import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
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

const NavigationBar = props => {
  // console.log("asfasdf", props);
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/"> Coffee Gram </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {props.currentUser.id ? (
                <div>
                <Nav.Item>
                <Nav.Link href={`/profile/${props.currentUser.id}`}>Profile</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link href={`/profile/${props.currentUser.id}`}>Logout</Nav.Link>
                </Nav.Item>
                </div>
              ) : (
                <Nav.Item>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

// export default NavigationBar

const mapStateToProps = state => {
  console.log("statae", state);
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
