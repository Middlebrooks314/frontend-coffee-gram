import React, { Component } from "react";
import RecipeList from "./RecipeList";
import Search from "./Search"


class RecipeIndex extends Component {
  render() {
    return (
      <div>
        {/* <Search /> */}
        <RecipeList />
      </div>
    );
  }
}

export default RecipeIndex;
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeIndex));
