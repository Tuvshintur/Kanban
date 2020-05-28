import React from "react";
import styles from "./Stage.module.css";

import Task from "../Task/Task";

const Stage = ({ name, tasks, onTaskSelectHandler }) => {
    return (
        <div className={styles.Stage}>
            <h2>{name}</h2>
            <div>
                {tasks.map((task) => (
                    <Task key={task.name} name={task.name} onTaskSelectHandler={onTaskSelectHandler} />
                ))}
            </div>
        </div>
    );
};

export default Stage;
