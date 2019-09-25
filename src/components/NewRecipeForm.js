import React, { Component } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { postFetchNewRecipe } from "../reducers/recipes-reducer";

// import the thunk
// create a map dispatch to props, import connect from react redux
// export default connect null, mapdispatchtoprops(newRecipeForm)
// reference RecipeList
//modify the class in order to handle local state, onchange and handlesubmit= will take state and it will pass the it to the function that

class NewRecipeForm extends Component {
  state = {
    title: '',
    method: '', 
    coffee: '',
    water: '',
    watertemp: '', 
    grindsize: '',
    time: '',
    instructions: ''
  }

//  [event.target.name]: event.target.value will take in any of the fields that match any of the state objects and evaluate that as the key. 
  handleFormChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
     })
  }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.handleEditSubmit(this.state, this.props.selectedNote.id)

  // }
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>New Coffee Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="RecipeName">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="email"
                name="title"
                placeholder="ex. Sunday Morning French Press"
              />
            </Form.Group>
            <Form.Group controlId="MethodSelect">
              <Form.Label>Brewing Method</Form.Label>
              <Form.Control name="method" as="select">
                <option selected disabled>Select...</option>
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
              <Form.Group as={Col} name="coffee" controlId="CoffeeWeight">
                <Form.Label>Coffee (g)</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} name="grindsize" controlId="GrindSize">
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

              <Form.Group as={Col} name="water" controlId="WaterWeight">
                <Form.Label>Water (g)</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} name="watertemp" controlId="WaterTemp">
                <Form.Label>WaterTemp(F)</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group name="instructions" controlId="Instructions">
              <Form.Label>Brewing Instructions:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>

            <Form.Group name="notes" controlId="Notes">
              <Form.Label>Notes:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary">Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default NewRecipeForm;
