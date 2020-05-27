import React from "react";

const Task = ({ name, onTaskSelectHandler }) => {
    return (
        <div
            onClick={(event) => onTaskSelectHandler(name)}
            style={{
                padding: "1rem",
                border: "1px solid #ccc",
                margin: "1rem 1rem 0 1rem",
            }}
        >
            {name}
        </div>
    );
};

export default Task;
