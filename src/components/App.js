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
import { updateUser } from '../actions/user-actions';
import SingleRecipe  from "./SingleRecipe"


class App extends React.Component {
  render() {
    console.log(this.props)
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

// receives the state of the store so it can be passed to components if needed.
const mapStateToProps = state => ({
  recipes: state.recipes, 
  user: state.user
});

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
