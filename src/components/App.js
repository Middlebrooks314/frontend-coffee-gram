import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Favorites from "./Favorites";
import RecipeIndex from "./RecipeIndex";
import NoMatch from "./NoMatch";
import Layout from "./Layout";
import NavigationBar from "./NavigationBar"
import { Jumbotron } from './Jumbotron'

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={RecipeIndex} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Favorites" component={Favorites} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
