import {SET_SEARCH, SET_SEARCH_DIET, SET_SEARCH_TEXT} from "../actionTypes";

const defaultState = {
    query: "",
    diet: ""
}

export const search = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload;
        case SET_SEARCH_TEXT:
            return { ...state, query: action.payload }
        case SET_SEARCH_DIET:
            return { ...state, diet: action.payload }
        default:
            return state;
    }
}