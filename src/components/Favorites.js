import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";
import { CardDeck } from "react-bootstrap";

class Favorites extends Component {
  render() {
    const isLoaded = !!this.props.currentUser.id;
    let userFavorites = [];
    if (isLoaded) {
      userFavorites = this.props.allRecipes.filter(recipe => {
        return this.props.favoriteIds.includes(recipe.id);
      });
    }

    return isLoaded ? (
      <div>
        <h3> Favorites </h3>
        <CardDeck>
          {userFavorites.map(recipe => {
            return (
              <RecipeCard id={recipe.id} key={recipe.id} recipe={recipe} />
            );
          })}
        </CardDeck>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allRecipes: state.recipes.allRecipes,
    currentUser: state.user.currentUser,
    favoriteIds: state.user.favoriteIds
  };
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
