import React, { Component } from "react";

import Kanban from "../../Kanban/Kanban";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import withErrorHandler from "../../Hoc/withErrorHandler/withErrorHandler";
import axios from "../../../axios-custom";

const NUM_STAGES = 4;

class KanbanBoard extends Component {
    state = {
        createInputValue: "",
    };

    stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];
    dropEffect = "move";
    componentDidMount() {
        this.props.onInitTasks();
    }

    onChangeInput = (event) => {
        this.setState({
            createInputValue: event.target.value,
        });
    };

    onCreateHandler = () => {
        const { createInputValue } = this.state;
        this.props.onTaskAdded(createInputValue, new Date().getTime());
        this.setState({ createInputValue: "" });
    };

    onTaskSelectHandler = (id) => {
        this.props.onSelectTask(id);
    };

    onDeleteHandler = () => {
        this.props.onTaskDeleted();
    };

    onTaskDragStartHandler = (event, taskId) => {
        this.props.onStartDragTask();
        event.dataTransfer.setData("taskId", taskId);
        event.dataTransfer.effectAllowed = this.dropEffect;
        // if (image.current) {
        //     event.dataTransfer.setDragImage(image.current, 0, 0);
        // }
        console.log(event.dataTransfer.getData("taskId"));
    };

    onTaskDropHandler = (event, stageId) => {
        const taskId = Number(event.dataTransfer.getData("taskId"));
        if (taskId) {
            this.props.onDropTask(stageId, taskId);
        }
    };

    onTaskDragEndHandler = () => {
        this.props.onEndDragTask();
    };

    render() {
        const { createInputValue } = this.state;

        let stagesTasks = [];
        for (let i = 0; i < NUM_STAGES; ++i) {
            stagesTasks.push([]);
        }
        if (this.props.tasks) {
            for (let task of this.props.tasks) {
                const stageId = task.stage;
                stagesTasks[stageId].push(task);
            }
        }

        return (
            <React.Fragment>
                <Kanban
                    stagesTasks={stagesTasks}
                    stagesNames={this.stagesNames}
                    onCreateHandler={this.onCreateHandler}
                    onChangeInput={this.onChangeInput}
                    createInputValue={createInputValue}
                    selectedInputValue={this.props.selectedTask}
                    onTaskSelectHandler={this.onTaskSelectHandler}
                    onDeleteHandler={this.onDeleteHandler}
                    onTaskDragStartHandler={this.onTaskDragStartHandler}
                    dragging={this.props.dragging}
                    onTaskDragEndHandler={this.onTaskDragEndHandler}
                    onTaskDropHandler={this.onTaskDropHandler}
                    dropEffect={this.dropEffect}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.task.tasks,
        error: state.task.error,
        selectedTask: state.task.selectedTask,
        dragging: state.task.dragging,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskAdded: (name, newId) => dispatch(actions.addTask(name, newId)),
        onTaskDeleted: () => dispatch(actions.deleteTask()),
        onInitTasks: () => dispatch(actions.initTasks()),
        onSelectTask: (id) => dispatch(actions.selectTask(id)),
        onStartDragTask: () => dispatch(actions.startDragTask()),
        onEndDragTask: () => dispatch(actions.endDragTask()),
        onDropTask: (stageId, taskId) => dispatch(actions.dropTask(stageId, taskId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(KanbanBoard, axios));
