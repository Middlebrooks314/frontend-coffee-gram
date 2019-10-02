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
      //  recipeId = this.props.currentUser.favorites.map(favorite => {
      //     return (favorite.recipe_id)
      //   })
      //   console.log("in Favorites", this.props.currentUser.favorites, recipeId);

    //   userFavorites = this.props.allRecipes.filter(recipe => {
    //     return this.props.userFavoriteIds.includes(recipe.id);
    //   });

      console.log(userFavorites);
    }

    return isLoaded ? (
      <div>
        <h3> Favorites </h3>
        {/* <CardDeck>
          {userFavorites.map(recipe => {
            return (
              <RecipeCard id={recipe.id} key={recipe.id} recipe={recipe} />
            );
          })}
        </CardDeck> */}
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
    userFavoriteIds: state.user.userFavoriteIds
  };
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
// export default Favorites;
