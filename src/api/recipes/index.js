import axios from 'axios';
import {useDispatch} from "react-redux";
import {fetchRecipesAction} from "../../redux/actions";

const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/search";
const apiKey = "8967e1ebefbb4a5f9d77874d78261e58";
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (query) => {
    try {
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey: apiKey,
                number: MAX_PER_PAGE
            }
        });

        const dispatch = useDispatch();
        dispatch(fetchRecipesAction(response.data.results));
    } catch (e) {
        console.log("erreur requete recipes", e);
    }
}