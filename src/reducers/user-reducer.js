const userURL = "http://localhost:3000/api/v1/users";
const profileURL = "http://localhost:3000/api/v1/profile";
const loginURL = "http://localhost:3000/api/v1/login";

// making a variable is like a pseudo-linter, way to catch error if I mispell the variable
// action types

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const SELECTED_USER = "SELECTED_USER";

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
  }
}

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
          console.log(user.message.value);

          // Here should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
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
            console.log("profile fetching tokensss persisting", user);
            dispatch(loginUser(user.user));
          }
        })
        .catch(error => console.log(error));
    }
  };
};

export const getUserProfileData = id => {
  return async dispatch => {
    console.log("get profile thunk fired", id);
    fetch(`${userURL}/recipes/${id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch(getProfileData(data))
      });
  };
};

const initialState = {
  currentUser: {},
  selectedUser: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload, loggedIn: true };
    case "LOGOUT_USER":
      return {
        currentUser: {},
        logginIn: false
      };
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
}
