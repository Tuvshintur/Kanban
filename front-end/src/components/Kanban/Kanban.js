import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Kanban.module.css";

import Controls from "./Controls/Controls";
import Board from "./Board/Board";

const kanban = (props) => {
    return (
        <div className={styles.Kanban}>
            <Controls
                onCreateHandler={props.onCreateHandler}
                onChangeInput={props.onChangeInput}
                createInputValue={props.createInputValue}
                selectedInputValue={props.selectedInputValue}
                onDeleteHandler={props.onDeleteHandler}
            />
            <Board
                stagesTasks={props.stagesTasks}
                stagesNames={props.stagesNames}
                onTaskSelectHandler={props.onTaskSelectHandler}
                dragging={props.dragging}
                onTaskDragStartHandler={props.onTaskDragStartHandler}
                onTaskDragEndHandler={props.onTaskDragEndHandler}
                onTaskDropHandler={props.onTaskDropHandler}
                dropEffect={props.dropEffect}
            />
        </div>
    );
};

export default withRouter(kanban);
