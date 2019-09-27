import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

const RecipeCard = props => {
    console.log("in RecipeCard", props)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to={`/recipe/${props.recipe.id}`} > 
          <Card.Img variant="top" src={props.recipe.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Card.Text>
            Method: {props.recipe.method}
          </Card.Text>
          <Card.Text>
            By {props.recipe.user.username}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
