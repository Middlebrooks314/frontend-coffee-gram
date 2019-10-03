import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import {userPostFetch} from "../reducers/user-reducer"
import { connect } from "react-redux";


class NewUserForm extends Component {
  state = {
    username: "",
    password: "",
    image: "",
    about: ""
  };

  //  [event.target.name]: event.target.value will take in any of the fields that match any of the state objects and evaluate that as the key.
  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state, this.props.history);
    console.log('submiting', this.state)
  };

  render() {
    console.log(this.state);
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Sign up</Modal.Title>
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
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" name="passwordConfirmation"/>
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="text" placeholder="upload image" name="image" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>About</Form.Label>
              <Form.Control type="text" placeholder="Tell us about yourself" name="about" onChange={this.handleChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.handleSubmit}>Sign up</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: (userInfo, history) => dispatch(userPostFetch(userInfo, history))
})

export default connect(null, mapDispatchToProps)(NewUserForm);


// export default NewUserForm;
