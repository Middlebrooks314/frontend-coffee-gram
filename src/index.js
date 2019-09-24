import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import recipesReducer from './reducers/recipes-reducer'
import userReducer from './reducers/user-reducer'




const allReducers = combineReducers({
    recipes: recipesReducer,
    user: userReducer
})

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__());






ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
