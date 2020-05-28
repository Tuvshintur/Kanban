import React from "react";
import styles from "./Task.module.css";

const Task = ({ name, onTaskSelectHandler }) => {
    return (
        <div className={styles.Task} onClick={() => onTaskSelectHandler(name)}>
            {name}
        </div>
    );
};

export default Task;
