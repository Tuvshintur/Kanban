import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    tasks: [],
    selectedTask: "",
    error: false,
    dragging: -1,
};

const addTask = (state, action) => {
    return updateObject(state, { tasks: state.tasks.concat(action.newTask) });
};

const deleteTask = (state, action) => {
    const { tasks, selectedTask } = state;
    return updateObject(state, { tasks: tasks.filter((t) => t.id !== selectedTask), selectedTask: "" });
};

const setTask = (state, action) => {
    return updateObject(state, {
        tasks: action.tasks,
        error: false,
    });
};

const selectTask = (state, action) => {
    return updateObject(state, { selectedTask: action.id });
};

const fetchTasksFail = (state, action) => {
    return updateObject(state, { error: true });
};

const startDragTask = (state, action) => {
    return updateObject(state, { dragging: action.taskId });
};

const dropTask = (state, action) => {
    const { tasks } = state;
    const indexOfTask = tasks.findIndex((t) => t.id === action.taskId);
    console.log(indexOfTask);
    const updatedTask = updateObject(tasks[indexOfTask], { stage: action.stageId });
    console.log(updatedTask);
    const updatedTasks = [...tasks.slice(0, indexOfTask), updatedTask, ...tasks.slice(indexOfTask + 1)];
    return updateObject(state, { tasks: updatedTasks });
};

const endDragTask = (state, action) => {
    return updateObject(state, { dragging: -1 });
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return addTask(state, action);
        case actionType.DELETE_TASK:
            return deleteTask(state, action);
        case actionType.SET_TASK:
            return setTask(state, action);
        case actionType.SELECT_TASK:
            return selectTask(state, action);
        case actionType.FETCH_TASK_FAIL:
            return fetchTasksFail(state, action);
        case actionType.START_DRAG_TASK:
            return startDragTask(state, action);
        case actionType.DROP_TASK:
            return dropTask(state, action);
        case actionType.END_DRAG_TASK:
            return endDragTask(state, action);
        default:
            return state;
    }
};

export default taskReducer;
