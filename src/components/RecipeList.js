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

const mapStateToProps = state => {
  return {
    recipes: state.recipes.allRecipes
  };
};


export default connect(mapStateToProps)(RecipeList);
