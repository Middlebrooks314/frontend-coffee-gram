import React, { Component } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";

class NewRecipeForm extends Component {
  render() {
    return (
      <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>New Coffee Recipe</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="ex. Sunday Morning French Press"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Brewing Method</Form.Label>
          <Form.Control as="select">
            <option>Select...</option>
            <option>Aeropress</option>
            <option>Beehouse Dripper</option>
            <option>Chemex</option>
            <option>Clever Dripper</option>
            <option>Cold Brew Maker</option>
            <option>French Press</option>
            <option>Handheld Espresso Maker</option>
            <option>Hario V60</option>
            <option>Kalita Wave</option>
            <option>Melitta</option>
            <option>Moka Pot</option>
            <option>Siphon/Vacuum</option>
            <option>Turkish Coffee</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCoffeeWeight">
            <Form.Label>Coffee (g)</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGrindSize">
            <Form.Label>Grind Size</Form.Label>
            <Form.Control as="select">
              <option>Select...</option>
              <option>Extra Fine</option>
              <option>Fine</option>
              <option>Medium-Fine</option>
              <option>Medium</option>
              <option>Medium-coarse</option>
              <option>Coarse</option>
              <option>Extra coarse</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWaterWeight">
            <Form.Label>Water (g)</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWaterWeight">
            <Form.Label>Water Temp. (F)</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="NotesForm.ControlTextarea1">
          <Form.Label>Brewing Instructions:</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Group controlId="NotesForm.ControlTextarea1">
          <Form.Label>Notes:</Form.Label>
          <Form.Control as="textarea" rows="2" />
        </Form.Group>
        
      </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="outline-secondary">Close</Button>
    
  </Modal.Footer>
</Modal.Dialog>
      
    );
  }
}

export default NewRecipeForm;
