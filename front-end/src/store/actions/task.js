import * as actionTypes from "./actionTypes";
import axios from "../../axios-custom";

export const addTask = (name, newId) => {
    return {
        type: actionTypes.ADD_TASK,
        newTask: {
            name: name,
            stage: 0,
            id: newId,
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

export const selectTask = (id) => {
    return {
        type: actionTypes.SELECT_TASK,
        id: id,
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

export const startDragTask = (taskId) => {
    return {
        type: actionTypes.START_DRAG_TASK,
        taskId: taskId,
    };
};

export const dropTask = (stageId, taskId) => {
    return {
        type: actionTypes.DROP_TASK,
        stageId: stageId,
        taskId: taskId,
    };
};

export const endDragTask = () => {
    return {
        type: actionTypes.END_DRAG_TASK,
    };
};
