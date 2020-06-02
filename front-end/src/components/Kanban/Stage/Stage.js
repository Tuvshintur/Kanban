import React from "react";
import styles from "./Stage.module.css";

import Task from "../Task/Task";

const Stage = ({
    stageId,
    name,
    tasks,
    onTaskSelectHandler,
    onTaskDragStartHandler,
    dragging,
    onTaskDragEndHandler,
    onTaskDropHandler,
    dropEffect,
}) => {
    const [isOver, setIsOver] = React.useState(false);

    const dragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = dropEffect;
        setIsOver(true);
    };

    const drop = (event, stageId) => {
        onTaskDropHandler(event, stageId);
        setIsOver(false);
    };

    const dragEnter = (event) => {
        event.dataTransfer.dropEffect = dropEffect;
        setIsOver(true);
    };

    const dragLeave = () => setIsOver(false);

    return (
        <div
            className={[styles.Stage, isOver ? styles.Over : ""].join(" ")}
            onDrop={(event) => {
                drop(event, stageId);
            }}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
        >
            <h2>{name}</h2>
            <div>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        onTaskDragStartHandler={onTaskDragStartHandler}
                        onTaskDragEndHandler={onTaskDragEndHandler}
                        dragging={dragging}
                        onTaskSelectHandler={onTaskSelectHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stage;
