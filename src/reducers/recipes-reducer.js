const recipesURL = "http://localhost:3000/api/v1/recipes";
// way to catch error if I mispell the variable
// action types
const GET_RECIPES = "GET_RECIPES";
const NEW_RECIPE = "NEW_RECIPE";

//action creators

const getRecipes = recipesArr => {
  return {
    type: GET_RECIPES,
    payload: recipesArr
  };
};

const newRecipe = recipe => {
  return {
    type: NEW_RECIPE,
    payload: recipe
  };
};

//thunk - implicitly returns another function asynch between the dispatch and the reducer

export const fetchInitialRecipes = () => {
  return async dispatch => {
    console.log("thunk-Fired!!");
    fetch(recipesURL)
      .then(resp => resp.json())
    //   .then(recipes => {
    //     dispatch(getRecipes(recipes));
    //   })
    .then(console.log)
      .catch(err => console.log(err));
  };
};

export const postFetchNewRecipe = recipeObj => {
  return async dispatch => {
    const recipeBody = { recipe: recipeObj };
    fetch(recipesURL, {
      method: "POST",
      body: JSON.stringify(recipeBody),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(recipe => {
        dispatch(newRecipe(recipe));
      }).catch(error => console.log(error))
  };
};

//initial state

const initialState = {
  allRecipes: []
  // add more keys here such as selected recipe
};

//reducer

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: action.payload
      };
    case NEW_RECIPE:
        return {
            ...state, 
            allRecipes: [...state.allRecipes, action.payload]
        }
    default:
      return state;
  }
}
