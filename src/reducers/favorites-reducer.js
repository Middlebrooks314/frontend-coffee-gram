

const favoritesURL = "http://localhost:3000/api/v1/favorites";

const CREATE_FAVORITE = "CREATE_FAVORITE";
const ADD_NEW_FAVORITE = "ADD_NEW_FAVORITE"



const addNewFavorite = (id) => {
  console.log('hello in there', id)
    return {
      type: ADD_NEW_FAVORITE,
      payload: id 
    };
  };

// after response the new favorite is added to the user favorites array 
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
        console.log(data.recipe.id)
        dispatch(addNewFavorite(recipeId))
      });
  };
};


export const deleteFavoriteFetch = (id) => {
  return async dispatch => {
      console.log("delete user thunk fired", id)
      fetch(`${favoritesURL}/${id}`, {
        method: "DELETE"
      })
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                console.log("error", data);
            }
            else{
              console.log("deleted", data);
              //   dispatch(deleteFavorite(data.recipe.id));
            }
          
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
    // case DELETE_FAVORITE:
    //   return { ...state, favorite: action.payload };
    default:
      return state;
  }
}
