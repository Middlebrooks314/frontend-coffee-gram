import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import recipesReducer from "./reducers/recipes-reducer";
import userReducer from "./reducers/user-reducer";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

const allReducers = combineReducers({
  recipes: recipesReducer,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
