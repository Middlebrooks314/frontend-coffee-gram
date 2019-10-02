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
import NewUserForm from "./NewUserForm";
import { connect } from "react-redux";
// import { updateUser } from "../actions/user-actions";
import SingleRecipe from "./SingleRecipe";
import { fetchInitialRecipes } from "../reducers/recipes-reducer";
import { getProfileFetch } from "../reducers/user-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchProfile();
  }

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={RecipeIndex} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/new" component={NewRecipeForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={NewUserForm} />
              <Route path="/recipe/:id" component={SingleRecipe} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

// pulling functions from the reducer file and placing them as props on this component, giving component more props
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => {
      dispatch(fetchInitialRecipes());
    },
    fetchProfile: () => dispatch(getProfileFetch())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
