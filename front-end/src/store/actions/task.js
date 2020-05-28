import * as actionTypes from "./actionTypes";
import axios from "../../axios-custom";

export const addTask = (name) => {
    return {
        type: actionTypes.ADD_TASK,
        newTask: {
            name: name,
            stage: 0,
        },
    };
};

export const deleteTask = () => {
    return {
        type: actionTypes.DELETE_TASK,
    };
};

export const fetchTasksFail = () => {
    return {
        type: actionTypes.FETCH_TASK_FAIL,
    };
};

export const setTask = (tasks) => {
    return {
        type: actionTypes.SET_TASK,
        tasks: tasks,
    };
};

export const selectTask = (name) => {
    return {
        type: actionTypes.SELECT_TASK,
        name: name,
    };
};

export const initTasks = () => {
    return (dispatch) => {
        axios
            .get("/tasks.json")
            .then((response) => {
                dispatch(setTask(response.data));
            })
            .catch(() => {
                dispatch(fetchTasksFail());
            });
    };
};
