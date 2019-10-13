const recipesURL = "http://localhost:3000/api/v1/recipes";

// making a variable is like a pseudo-linter, way to catch error if I mispell the variable
// action types
const GET_RECIPES = "GET_RECIPES";
const NEW_RECIPE = "NEW_RECIPE";
const SELECTED_RECIPE = "SELECTED_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
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

const selectedRecipe = recipe => {
  return {
    type: SELECTED_RECIPE,
    payload: recipe
  };
};

const deleteRecipe = recipeId => {
  return {
    type: DELETE_RECIPE,
    payload: recipeId
  };
};

//thunk - implicitly returns another function asynch between the dispatch and the reducer

// fetches all the recipes on the index page and sets the state to all the recipes. 
export const fetchInitialRecipes = () => {
  return async dispatch => {
    // console.log("thunk fired!!");
    return fetch(recipesURL)
      .then(resp => resp.json())
      .then(recipes => {
        dispatch(getRecipes(recipes));
      })
      .then(console.log)
      .catch(err => console.log(err));
  };
};

// Post fetch for a new recipe, and sends the page to the new recipe show page after the fetch returns
export const postNewRecipe = (recipeObj, history) => {
  return async dispatch => {
    console.log("post-thunk fired!");
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
        dispatch({ type: SELECTED_RECIPE, recipe });
        history.push(`recipe/${recipe.id}`);
      })
      .then(console.log)
      .catch(error => console.log(error));
  };
};

// when a user clicks on a recipe card, the single recipe is fetched to show the recipe show page. 
export const fetchSingleRecipe = id => {
  return async dispatch => {
    console.log("get recipe thunk fired", id);
    fetch(`${recipesURL}/${id}`)
      .then(resp => resp.json())
      .then(recipe => {
        console.log(recipe);
        dispatch(selectedRecipe(recipe));
      });
  };
};

// Delete fetch when a recipe is deleted. 
export const deleteRecipeFetch = (id, history) => {
  return async dispatch => {
    console.log("delete recipe thunk fired", id);
    fetch(`${recipesURL}/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(data => {
        console.log("deleted", data.message);
        dispatch(deleteRecipe(id));
        history.push("/");
      });
  };
};

//initial state

const initialState = {
  allRecipes: [],
  selectedRecipe: {}
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
      };
    case SELECTED_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload
      };
    case DELETE_RECIPE:
      // console.log("asdfasd", action);
      return {
        allRecipes: state.allRecipes.filter(
          recipe => recipe.id !== action.payload
        )
      };
    default:
      return state;
  }
}
