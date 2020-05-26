import React, { Component } from "react";

import Kanban from "../../Kanban/Kanban";

const NUM_STAGES = 4;

class KanbanBoard extends Component {
    state = {
        createInputValue: "",
        selectedInputValue: "",
        tasks: [
            { name: "task 0", stage: 0 },
            { name: "task 1", stage: 0 },
            { name: "task 2", stage: 0 },
            { name: "task 3", stage: 0 },
            { name: "task 4", stage: 1 },
            { name: "task 5", stage: 1 },
            { name: "task 6", stage: 1 },
            { name: "task 7", stage: 2 },
            { name: "task 8", stage: 2 },
            { name: "task 9", stage: 3 },
        ],
    };

    stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];

    onChangeInput = (event) => {
        this.setState({
            createInputValue: event.target.value,
        });
    };

    onCreateHandler = () => {
        const { createInputValue, tasks } = this.state;
        this.setState({
            tasks: [...tasks, { name: createInputValue, stage: 0 }],
            createInputValue: "",
        });
    };

    onTaskSelectHandler = (value) => {
        this.setState({ selectedInputValue: value });
    };

    onMoveBackHandler = () => {
        const { tasks, selectedInputValue } = this.state;
        tasks.map((t) => {
            return t.name === selectedInputValue && t.stage > 0 ? t.stage-- : t;
        });
        console.log(tasks);
        this.setState({ tasks: tasks });
    };

    onMoveForwardHandler = () => {
        const { tasks, selectedInputValue } = this.state;
        tasks.map((t) => {
            return t.name === selectedInputValue && t.stage < NUM_STAGES - 1 ? t.stage++ : t;
        });
        this.setState({ tasks: tasks });
    };

    onDeleteHandler = () => {
        const { tasks, selectedInputValue } = this.state;
        this.setState({ tasks: tasks.filter((t) => t.name !== selectedInputValue), selectedInputValue: "" });
    };

    render() {
        const { tasks, createInputValue, selectedInputValue } = this.state;

        let stagesTasks = [];
        for (let i = 0; i < NUM_STAGES; ++i) {
            stagesTasks.push([]);
        }
        for (let task of tasks) {
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
                    selectedInputValue={selectedInputValue}
                    onTaskSelectHandler={this.onTaskSelectHandler}
                    onMoveForwardHandler={this.onMoveForwardHandler}
                    onMoveBackHandler={this.onMoveBackHandler}
                    onDeleteHandler={this.onDeleteHandler}
                />
            </React.Fragment>
        );
    }
}

export default KanbanBoard;
