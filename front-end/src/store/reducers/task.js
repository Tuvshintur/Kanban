import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    tasks: [
        { name: "task 0", stage: 0 },
        { name: "task 1", stage: 0 },
        { name: "task 2", stage: 0 },
        { name: "task 3", stage: 0 },
        { name: "task 4", stage: 1 },
        { name: "task 5", stage: 1 },
        { name: "task 6", stage: 1 },
        { name: "task 7", stage: 2 },
        { name: "task 8", stage: 2 },
        { name: "task 9", stage: 3 },
    ],
    selectedTask: "",
    error: false,
};

const addTask = (state, action) => {
    return updateObject(state, { tasks: state.tasks.concat(action.newTask) });
};

const deleteTask = (state, action) => {
    const { tasks, selectedTask } = state;
    return updateObject(state, { tasks: tasks.filter((t) => t.name !== selectedTask), selectedTask: "" });
};

const setTask = (state, action) => {
    return updateObject(state, {
        tasks: action.tasks,
        error: false,
    });
};

const selectTask = (state, action) => {
    return updateObject(state, { selectedTask: action.name });
};

const fetchTasksFail = (state, action) => {
    return updateObject(state, { error: true });
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
        default:
            return state;
    }
};

export default taskReducer;
