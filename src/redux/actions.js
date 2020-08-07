import {ADD_RECIPES, SELECTED_RECIPE, ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS} from "./actionTypes";

export const fetchRecipesAction = (data) => {
    return {
        type: ADD_RECIPES,
        payload: {
            data
        }
    };
}

export const fetchSelectedRecipeAction = data => ({
    type: SELECTED_RECIPE,
    payload: {
        data
    }
})

export const addTask = title => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime(),
        title,
        completed: false
    }
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: id
})

export const changeTaskStatus = id => ({
    type: CHANGE_TASK_STATUS,
    payload: id
})