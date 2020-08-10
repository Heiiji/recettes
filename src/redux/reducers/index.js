import { combineReducers } from 'redux';
import { recipesList } from './recipesList';
import { selectedRecipe } from "./selectedRecipe";
import { TasksList } from './TasksList';
import { search } from "./search";

export default combineReducers({
    recipesList,
    selectedRecipe,
    TasksList,
    search
});