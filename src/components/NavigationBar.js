import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { logoutUser } from "../reducers/user-reducer";
import { withRouter } from "react-router-dom";
import WhiteCoffeeGramLogo from "../assets/WhiteCoffeeGramLogo.svg";

const Styles = styled.div`
  .navbar {
    background-color: #222
    height: 150px;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends React.Component {
  // console.log("asfasdf", props);

  handleLogout = (history, event) => {
    // console.log("logout")
    localStorage.clear();
    this.props.logoutUser();
  };
  render() {
    return (
      <Styles>
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img
              src={WhiteCoffeeGramLogo}
              height="125px"
              width="125px"
              right="15px"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>

              {this.props.currentUser.id ? (
                <>
                  <Nav.Item>
                    <Nav.Link href={`/profile/${this.props.currentUser.id}`}>
                      Profile
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="/favorites">Favorites</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href={"/new"}>New Recipe</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href={"/"} onClick={this.handleLogout}>
                      Logout
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <Nav.Item>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

// export default NavigationBar

const mapStateToProps = state => {
  console.log("state in the navbarÔ", state);
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
