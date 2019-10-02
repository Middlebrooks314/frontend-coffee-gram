import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { userLoginFetch } from "../reducers/user-reducer";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    // console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    // console.log(this.state);
    event.preventDefault();
    this.props.userLoginFetch(this.state, this.props.history);
  };

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Login to CoffeeGram</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter username"
                name="username"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.handleSubmit}>
            Login
          </Button>
          <Button variant="outline-secondary" href="/signup">
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: (userInfo, history) =>
    dispatch(userLoginFetch(userInfo, history))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);

// export default LoginForm;
