import React from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { fetchSingleRecipe } from "../reducers/recipes-reducer";

class SingleRecipe extends React.Component {
componentDidMount(){
  this.props.fetchRecipe(this.props.match.params.id)
}

  render() {
    console.log("in SingleRecipe", this.props);
    const isLoaded = !!this.props.recipe
    return isLoaded ? (
      <div>
        <Card className="text-center">
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    ) : (
      <div>loading.............</div>
    )
  };
}


  

// passing props of data from the store to this component
const mapStateToProps = (state) => ({
  recipe: state.recipes.selectedRecipe
})


const mapDispatchToProps = (dispatch) => ({
  fetchRecipe: (id) => {
    dispatch(fetchSingleRecipe(id))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecipe));



