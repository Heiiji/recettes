import axios from 'axios';
import {fetchRecipesAction, fetchSelectedRecipeAction} from "../../redux/actions";

const ENDPOINT_BASE = "https://api.spoonacular.com/";
const ENDPOINT_RECIPES = ENDPOINT_BASE + "recipes/search";
const apiKey = "8967e1ebefbb4a5f9d77874d78261e58";
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch, search) => {
    try {
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                ...search,
                apiKey: apiKey,
                number: MAX_PER_PAGE
            }
        });

        dispatch(fetchRecipesAction(response.data.results));
    } catch (e) {
        console.log("erreur requete recipes", e);
    }
}

export const fetchSelectedRecipe = async (dispatch, recipeId) => {
    try {
        const response = await axios.get(`${ENDPOINT_BASE}recipes/${recipeId}/information`,{
            params: {
                apiKey: apiKey
            }
        });

        dispatch(fetchSelectedRecipeAction(response.data));
    } catch (e) {
        console.log("error", e);
    }
}