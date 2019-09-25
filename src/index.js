import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import recipesReducer from "./reducers/recipes-reducer";
import userReducer from "./reducers/user-reducer";
import thunkMiddleware from "redux-thunk"


const allReducers = combineReducers({
  recipes: recipesReducer,
  user: userReducer
});

const middleWare = applyMiddleware(thunkMiddleware)


// , window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(allReducers, middleWare);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
