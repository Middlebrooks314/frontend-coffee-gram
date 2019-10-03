import addFavorite from './user-reducer'

const favoritesURL = "http://localhost:3000/api/v1/favorites";

const CREATE_FAVORITE = "CREATE_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";
const ADD_FAVORITES = "ADD_FAVORITES"



const addNewFavorite = (id) => {
    return {
      type: ADD_FAVORITES,
      payload: id 
    };
  };

export const createFavoriteFetch = (recipeId, userId) => {
  return dispatch => {
    console.log("creating the favss", recipeId, userId);
    fetch(favoritesURL, {
      method: "POST",
      body: JSON.stringify({ 
          recipe_id: recipeId, 
          user_id: userId }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data.id)
        dispatch(addNewFavorite(data.id))
      });
  };
};

export const deleteFavoriteFetch = (id) => {
    return async dispatch => {
      console.log("delete user thunk fired", id);
      fetch(`${favoritesURL}/${id}`, {
        method: "DELETE"
      })
        .then(resp => resp.json())
        .then(data => {
            if(!data.error) {
                console.log("deleted", data.message);
            }
        //   dispatch(deleteUser(id));
          
        });
    };
  };

const initialState = {
  favorite: {}
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_FAVORITE:
      return { ...state, favorite: action.payload };
    case DELETE_FAVORITE:
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
}
