import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

class LoginForm extends Component {
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
              <Form.Control type="email" placeholder="Enter username" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary">Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default LoginForm;
