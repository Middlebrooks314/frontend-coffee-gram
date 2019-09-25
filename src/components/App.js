import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Favorites from "./Favorites";
import RecipeIndex from "./RecipeIndex";
import NoMatch from "./NoMatch";
import Layout from "./Layout";
import NavigationBar from "./NavigationBar";
import { Jumbotron } from "./Jumbotron";
import NewRecipeForm from "./NewRecipeForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
// import { updateUser } from "../actions/user-actions";
import SingleRecipe from "./SingleRecipe";
import { fetchInitialRecipes } from '../reducers/recipes-reducer'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={RecipeIndex} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Favorites" component={Favorites} />
              <Route path="/New" component={NewRecipeForm} />
              <Route path="/Login" component={LoginForm} />
              <Route path="/Signup" component={SignUpForm} />
              <Route path="/Recipe" component={SingleRecipe} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}



// pulling functions from the reducer file and placing them as props on this component, giving component more props
const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => {
    dispatch(fetchInitialRecipes())
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
