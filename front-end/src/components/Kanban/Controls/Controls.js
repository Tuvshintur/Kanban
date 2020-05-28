import React from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from "./Controls.module.css";

const Controls = (props) => {
    const state = {
        inputTask: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "New Task",
            },
        },
        selectedTask: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Selected task name",
                readOnly: true,
            },
        },
    };

    return (
        <div className={styles.Controls}>
            <h1>Controls</h1>
            <div className={styles.Flex}>
                <Input
                    elementType={state.inputTask.elementType}
                    elementConfig={state.inputTask.elementConfig}
                    value={props.createInputValue}
                    changed={props.onChangeInput}
                />
                <Button btnType="Success" disabled={props.createInputValue === ""} clicked={props.onCreateHandler}>
                    Create
                </Button>
            </div>
            <div className={[styles.Mt_1, styles.Flex].join(" ")}>
                <Input
                    elementType={state.selectedTask.elementType}
                    elementConfig={state.selectedTask.elementConfig}
                    value={props.selectedInputValue}
                />
                <Button btnType="Danger" disabled={props.selectedInputValue === ""} clicked={props.onDeleteHandler}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Controls;
