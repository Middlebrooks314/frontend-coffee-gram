import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = props => {
  // console.log("in RecipeCard", props);
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
        <Link to={`/recipe/${props.recipe.id}`}>
          <Card.Title>{props.recipe.title}</Card.Title>
          </Link>
          <Card.Text>Method: {props.recipe.method}</Card.Text>
          <Card.Text>By {props.recipe.user.username}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
