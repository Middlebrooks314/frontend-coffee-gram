import React, { Component } from "react";
import RecipeList from './RecipeList'


class RecipeIndex extends Component {
    constructor() {
        super() 
        this.state = {
            recipes: []
        }
    }


    
  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}

export default RecipeIndex;
