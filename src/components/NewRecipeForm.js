import React, { Component } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { postNewRecipe } from "../reducers/recipes-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import the thunk
// create a map dispatch to props, import connect from react redux
// export default connect null, mapdispatchtoprops(newRecipeForm)
// reference RecipeList
//modify the class in order to handle local state, onchange and handlesubmit= will take state and it will pass the it to the function that

class NewRecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      method: "",
      coffee: "",
      water: "",
      watertemp: "",
      grindsize: "",
      time: "",
      instructions: "",
      image: ""
      // user_id: "5"
      // hard coded user for testing
    };
  }

  //  [event.target.name]: event.target.value will take in any of the fields that match any of the state objects and evaluate that as the key.
  handleChange = event => {
    // console.log(event.target.value);
    console.log(this.props.currentUser)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postRecipe({...this.state, user_id: this.props.currentUser}, this.props.history)
    // console.log({...this.state, user_id: this.props.currentUser})
  };

  render() {
    console.log(this.state);
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
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group controlId="MethodSelect">
                <Form.Label>Brewing Method</Form.Label>
                <Form.Control
                  name="method"
                  as="select"
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Select...
                  </option>
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
              <Form.Group as={Col} controlId="time">
                <Form.Label>Time (mm:ss)</Form.Label>
                <Form.Control name="time" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Coffee (g)</Form.Label>
                <Form.Control name="coffee" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="GrindSize">
                <Form.Label>Grind Size</Form.Label>

                <Form.Control
                  as="select"
                  name="grindsize"
                  onChange={this.handleChange}
                >
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

              <Form.Group as={Col} controlId="WaterWeight">
                <Form.Label>Water (g)</Form.Label>
                <Form.Control name="water" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="WaterTemp">
                <Form.Label>WaterTemp(F)</Form.Label>
                <Form.Control name="watertemp" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="RecipeImage">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="email"
                name="image"
                placeholder="Upload an image of your fresh brew"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="Instructions">
              <Form.Label>Brewing Instructions:</Form.Label>
              <Form.Control
                as="textarea"
                name="instructions"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="Notes">
              <Form.Label>Notes:</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  postRecipe: (recipe, history) => {
    dispatch(postNewRecipe(recipe, history));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(withRouter(NewRecipeForm));
  
  // { postNewRecipe }