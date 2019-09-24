import React from "react";
import RecipeCard from "./RecipeCard";
import { CardDeck } from "react-bootstrap";
import { connect } from "react-redux";

const RecipeList = props => {
  console.log("in RecipeList", props);
  return (
    <CardDeck>
      {props.recipes.map(recipe => {
        return <RecipeCard id={recipe.id} key={recipe.id} recipe={recipe} />;
      })}
    </CardDeck>
  );
};


const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = () => {
  return {
    fetchRecipes: () => {console.log('HELLO') }
  }
}

// mapDispatchToProps = allows us to read the state from the store
// mapStateToProps = allows us to write to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

