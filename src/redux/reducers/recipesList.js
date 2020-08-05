import {ADD_RECIPES} from "../actionTypes";

const defaultState = '';

export const recipesList = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
        case ADD_RECIPES:
            return action.payload.data;
    }
}