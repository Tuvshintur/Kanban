import React from "react";

import Task from "../Task/Task";

const Stage = ({ name, tasks, onTaskSelectHandler }) => {
    return (
        <div
            style={{
                flexGrow: 1,
                margin: "1rem",
                paddingBottom: "1rem",
                background: "#fafafa",
            }}
        >
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
