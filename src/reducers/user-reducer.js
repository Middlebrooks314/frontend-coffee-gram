const userURL = "http://localhost:3000/api/v1/users";
const profileURL = "http://localhost:3000/api/v1/profile";
const loginURL = "http://localhost:3000/api/v1/login";

// making a variable is like a pseudo-linter, way to catch error if I mispell the variable
// action types

const LOGIN_USER = "LOGIN_USER";
const GET_USERS = "GET_USERS";

//action creators

const loginUser = user => {
  return {
    type: LOGIN_USER,
    payload: user
  };
};

//thunk - implicitly returns another function asynch between the dispatch and the reducer

export const userPostFetch = user => {
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
          console.log(user.message.value);

          // Here should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem("token", user.jwt);
          dispatch(loginUser(user.user));
        }
      })
      .catch(error => console.log(error));
  };
};

export const userLoginFetch = user => {
  return async dispatch => {
    console.log("login thunk fired", user);
    return fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.message) {
          console.log(user.message);
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
          //action: error message with dispatch of error message, mapState in login form of the error
        } else {
          localStorage.setItem("token", user.jwt);
          dispatch(loginUser(user.user));
        }
      })
      .catch(error => console.log(error));
  };
};

export const getProfileFetch = () => {
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
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(user.user));
          }
        })
        .catch(error => console.log(error));
    }
  };
};

const initialState = {
  currentUser: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}
