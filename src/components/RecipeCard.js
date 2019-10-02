import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = props => {
  console.log("in RecipeCard", props);
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
          {props.recipe.user && <Link to={`/profile/${props.recipe.user.id}`}><Card.Text>By {props.recipe.user.username}</Card.Text></Link>}


          {/* {props.recipe.favorites.user_id === props.} */}
          <Button variant="outline-light"  style={{fontSize: "37px", color:'black'}}>{'</3'}</Button>
          <Button style={{fontSize: "30px"}}>{'<3'}</Button>

        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
