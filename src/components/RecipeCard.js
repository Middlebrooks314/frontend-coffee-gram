import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createFavoriteFetch } from "../reducers/favorites-reducer";
import { deleteFavoriteFetch } from "../reducers/favorites-reducer";
import { deleteFavorite } from "../reducers/user-reducer";

const RecipeCard = props => {
  console.log("in RecipeCard", props.favoriteIds);
  return (
    <div>
      <Card style={{ width: "350px" }}>
        <Link to={`/recipe/${props.recipe.id}`}>
          <Card.Img
            style={{ height: "250px" }}
            className="img-fluid"
            variant="top"
            src={props.recipe.image}
            waves
          />
        </Link>
        <Card.Body>
          <Link to={`/recipe/${props.recipe.id}`} className="link">
            <Card.Title>{props.recipe.title}</Card.Title>
          </Link>
          <Card.Text>Method: {props.recipe.method}</Card.Text>
          {props.recipe.user && (
            <Link to={`/profile/${props.recipe.user.id}`}>
              <Card.Text>By {props.recipe.user.username}</Card.Text>
            </Link>
          )}
             {props.favoriteIds.includes(props.recipe.id) ? (
            <Button
              variant="outline-light"
              style={{ fontSize: "37px", color: "red" }}
              onClick={() => {
                
                const favorite = props.currentUser.favorites.find(favorite => {
                  return favorite.recipe_id === props.recipe.id;
                });
                props.favoriteDelete(favorite.id)
                props.deleteFavoriteFromArray(props.recipe.id)
              }}
            >
              ♥️
            </Button>
          ) : (
            <Button
              variant="outline-light"
              style={{ fontSize: "30px", color: "red" }}
              onClick={() => {
                props.favoriteCreate(props.recipe.id, props.currentUser.id);
              }}
            >
              ♡
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favoriteIds: state.user.favoriteIds,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  favoriteCreate: (recipeId, userId) => {
    dispatch(createFavoriteFetch(recipeId, userId));
  },
  favoriteDelete: id => {
    dispatch(deleteFavoriteFetch(id));
  },

  deleteFavoriteFromArray: recipeId => {
    dispatch(deleteFavorite(recipeId))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);
// export default RecipeCard;
