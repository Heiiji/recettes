import { ADD_RECIPES } from "./actionTypes";

export const fetchRecipesAction = (data) => {
    return {
        type: ADD_RECIPES,
        payload: {
            data
        }
    };
}