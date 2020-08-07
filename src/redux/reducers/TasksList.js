import { ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS } from '../actionTypes';

const defaultState = [];

export const TasksList = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state, action.payload]
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload)
        case CHANGE_TASK_STATUS:
            return state.map(task => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }
                return task;
            })
        default:
            return state;
    }
}