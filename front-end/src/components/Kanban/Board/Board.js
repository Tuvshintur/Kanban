import React from "react";

import Stage from "../Stage/Stage";

const Board = ({
    stagesNames,
    stagesTasks,
    onTaskSelectHandler,
    onTaskDragStartHandler,
    dragging,
    onTaskDragEndHandler,
    onTaskDropHandler,
    dropEffect,
}) => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                }}
            >
                {stagesTasks.map((tasks, idx) => (
                    <Stage
                        stageId={idx}
                        key={stagesNames[idx]}
                        name={stagesNames[idx]}
                        tasks={tasks}
                        onTaskSelectHandler={onTaskSelectHandler}
                        onTaskDragStartHandler={onTaskDragStartHandler}
                        dragging={dragging}
                        onTaskDragEndHandler={onTaskDragEndHandler}
                        onTaskDropHandler={onTaskDropHandler}
                        dropEffect={dropEffect}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
