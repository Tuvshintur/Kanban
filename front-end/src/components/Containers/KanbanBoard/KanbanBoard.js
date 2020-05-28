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

    onChangeInput = (event) => {
        this.setState({
            createInputValue: event.target.value,
        });
    };

    onCreateHandler = () => {
        const { createInputValue } = this.state;
        this.props.onTaskAdded(createInputValue);
        this.setState({ createInputValue: "" });
    };

    onTaskSelectHandler = (name) => {
        this.props.onSelectTask(name);
    };

    onDeleteHandler = () => {
        this.props.onTaskDeleted();
    };

    render() {
        const { createInputValue } = this.state;

        let stagesTasks = [];
        for (let i = 0; i < NUM_STAGES; ++i) {
            stagesTasks.push([]);
        }
        for (let task of this.props.tasks) {
            const stageId = task.stage;
            stagesTasks[stageId].push(task);
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskAdded: (name) => dispatch(actions.addTask(name)),
        onTaskDeleted: () => dispatch(actions.deleteTask()),
        onInitTasks: () => dispatch(actions.initTasks()),
        onSelectTask: (name) => dispatch(actions.selectTask(name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(KanbanBoard, axios));
