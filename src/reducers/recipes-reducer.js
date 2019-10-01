
const recipesURL = "http://localhost:3000/api/v1/recipes";


// making a varibale is like a pseudo-linter, way to catch error if I mispell the variable
// action types
const GET_RECIPES = "GET_RECIPES";
const NEW_RECIPE = "NEW_RECIPE";
const SELECTED_RECIPE = "SELECTED_RECIPE";
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


//thunk - implicitly returns another function asynch between the dispatch and the reducer

export const fetchInitialRecipes = () => {
  return async dispatch => {
    // console.log("thunk fired!!");
    return (fetch(recipesURL)
      .then(resp => resp.json())
      .then(recipes => {
        dispatch(getRecipes(recipes));
      })
    .then(console.log)
      .catch(err => console.log(err))
    )};
};

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
        dispatch(newRecipe(recipe))
        dispatch({type: SELECTED_RECIPE, recipe})
        history.push(`recipe/${recipe.id}`)
      }).then(console.log)
      .catch(error => console.log(error))  
  };
};

export const fetchSingleRecipe = (id) => {
  return async dispatch => {
    console.log("get recipe thunk fired", id)
    fetch(`${recipesURL}/${id}`)
    .then(resp => resp.json())
    .then(recipe => {
      console.log(recipe)
      dispatch(selectedRecipe(recipe))
    })
  }
}


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
        }
    case SELECTED_RECIPE:
      return {
        ...state, 
        selectedRecipe: action.payload
      }
    default:
      return state;
  }
}
