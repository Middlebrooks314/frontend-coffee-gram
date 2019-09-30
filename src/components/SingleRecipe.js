import React from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleRecipe } from "../reducers/recipes-reducer";
import { Link } from "react-router-dom";

class SingleRecipe extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  render() {
    // console.log("in SingleRecipe", this.props);
    const isLoaded = !!this.props.recipe;
    return isLoaded ? (
      <div className="">
        <div className="">
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-black">
            {this.props.recipe.title}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">What you need:</h5>
                <li className="list-group-item">
                  Instrument: {this.props.recipe.method}
                </li>
                <li className="list-group-item">
                  Beans: {this.props.recipe.coffee}g
                </li>
                <li className="list-group-item">
                  Grindsize: {this.props.recipe.grindsize}
                </li>
                <li className="list-group-item">
                  Water: {this.props.recipe.water}g
                </li>
                <li className="list-group-item">
                  Water Temperature: {this.props.recipe.watertemp}F
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Preparation Instructions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${this.props.recipe.instructions}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete Recipe
              </button>
            </div>
          </div>
          <Link to="/" className="btn btn-link">
            Back to recipes
          </Link>
        </div>
      </div>
    ) : (
      <div>loading.............</div>
    );
  }
}

// passing props of data from the store to this component
const mapStateToProps = state => ({
  recipe: state.recipes.selectedRecipe
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: id => {
    dispatch(fetchSingleRecipe(id));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleRecipe)
);
