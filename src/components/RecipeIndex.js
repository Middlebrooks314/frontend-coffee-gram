import React, { Component } from "react";
import RecipeList from './RecipeList'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"


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

// export default RecipeIndex;

// passing props of data from the store to this component
const mapStateToProps = (state) => ({
  
})


const mapDispatchToProps = (dispatch) => ({
  
   
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeIndex));
