import React from "react";
import styles from "./Task.module.css";

const Task = ({ id, name, onTaskSelectHandler, onTaskDragStartHandler, dragging, onTaskDragEndHandler }) => {
    return (
        <div
            className={[styles.Task, dragging === id ? styles.Dragging : ""].join(" ")}
            draggable
            onDragStart={(event) => {
                onTaskDragStartHandler(event, id);
            }}
            onDragEnd={onTaskDragEndHandler}
            onClick={() => onTaskSelectHandler(id)}
        >
            {name}
        </div>
    );
};

export default Task;
