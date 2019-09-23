import React, { Component } from "react";
import { Form } from "react-bootstrap";

class NewRecipeForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="email" placeholder="ex. Sunday Morning French Press Method" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Brewing Method</Form.Label>
          <Form.Control as="select" >
            <option>Aeropress</option>
            <option>Chemex</option>
            <option>Cold Brew Maker</option>
            <option>French Press</option>
            <option>Handheld Espresso Maker</option>
            <option>Hario V60</option>
            <option>Moka Pot</option>
            <option>Siphon/Vacuum</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    );
  }
}

export default NewRecipeForm;
