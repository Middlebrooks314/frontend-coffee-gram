import React, { Component } from "react";
import RecipeList from './RecipeList'
const recipesURL = 'http://localhost:3000/api/v1/recipes'

class RecipeIndex extends Component {
    constructor() {
        super() 
        this.state = {
            recipes: []
        }
    }

    fetchRecipes = () => {
        fetch(recipesURL)
        .then(resp => resp.json())
        .then(recipes => this.setState({ recipes }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchRecipes()
    }

  render() {
    return (
      <div>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeIndex;
