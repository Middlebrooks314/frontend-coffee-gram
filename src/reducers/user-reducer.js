const userURL = "http://localhost:3000/api/v1/users";
const profileURL = "http://localhost:3000/api/v1/profile";
const loginURL = "http://localhost:3000/api/v1/login";

// making a variable is like a pseudo-linter, way to catch error if I mispell the variable
// action types

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const SELECTED_USER = "SELECTED_USER";
const DELETE_USER = "DELETE_USER";
const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";
const ADD_NEW_FAVORITE = "ADD_NEW_FAVORITE";

//action creators

const loginUser = user => {
  return {
    type: LOGIN_USER,
    payload: user
  };
};

export function logoutUser() {
  console.log("user logged out");
  return {
    type: LOGOUT_USER
  };
}

const getProfileData = user => {
  return {
    type: SELECTED_USER,
    payload: user
  };
};

const deleteUser = userId => {
  return {
    type: DELETE_USER,
    payload: userId
  };
};

const setUserFavorites = array => {
  return {
    type: ADD_FAVORITE,
    payload: array
  };
};

export const deleteFavorite = id => {
  return {
    type: DELETE_FAVORITE,
    payload: id
  };
};

/**
 *
 *
 *
 *
 *
 */

//thunk - implicitly returns another function asynch between the dispatch and the reducer

export const userPostFetch = (user, history) => {
  return async dispatch => {
    console.log("user post-thunk fired!");
    fetch(userURL, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.message) {
          alert(user.message);
        } else {
          localStorage.setItem("token", user.jwt);
          dispatch(loginUser(user.user));
          history.push("/");
        }
      })
      .catch(error => console.log(error));
  };
};

export const userLoginFetch = (user, history) => {
  return async dispatch => {
    console.log("login thunk fired", user);
    fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(user => {
        console.log(user);
        if (user.message) {
          console.log(user.message);
          alert(user.message);
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
          //action: error message with dispatch of error message, mapState in login form of the error
        } else {
          console.log("fetch login", user);
          localStorage.setItem("token", user.jwt);
          dispatch(loginUser(user.user));
          history.push("/");
          const favoriteRecipeId = user.user.favorites.map(favorite => {
            return favorite.recipe_id;
          });
          dispatch(setUserFavorites(favoriteRecipeId));
        }
      })
      .catch(error => console.log(error));
  };
};

export const getProfileFetch = history => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch(profileURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => {
          if (user.message) {
            history.push("/login");

            console.log("error here ?", user);
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(user.user));

            const favoriteRecipeId = user.user.favorites.map(favorite => {
              return favorite.recipe_id;
            });

            dispatch(setUserFavorites(favoriteRecipeId));
          }
        })
        .catch(error => {
          console.log("asdfasfdasfd", error);
        });
    }
  };
};

export const getUserProfileData = id => {
  return async dispatch => {
    fetch(`${userURL}/recipes/${id}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch(getProfileData(data));
      });
  };
};

export const deleteUserFetch = (id, history) => {
  return async dispatch => {
    console.log("delete user thunk fired", id);
    fetch(`${userURL}/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(data => {
        console.log("deleted", data.message);
        dispatch(deleteUser(id));
        history.push("/");
        localStorage.clear();
      });
  };
};

const initialState = {
  currentUser: {},
  selectedUser: {},
  favoriteIds: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload, loggedIn: true };
    case LOGOUT_USER:
      return {
        currentUser: {},
        loggedIn: false
      };
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    case DELETE_USER:
      return {
        currentUser: {},
        selectedUser: {},
        loggedIn: false
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteIds: action.payload
      };
    case ADD_NEW_FAVORITE:
      return {
        ...state,
        favoriteIds: [...state.favoriteIds, action.payload]
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favoriteIds: state.favoriteIds.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
}
