import React, { Component } from "react";
import RecipeList from "./RecipeList";


class RecipeIndex extends Component {
  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}

export default RecipeIndex;
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeIndex));
