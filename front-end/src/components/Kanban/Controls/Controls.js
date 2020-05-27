import React from "react";

import styles from "./Controls.module.css";

const Controls = (props) => {
    return (
        <div className={styles.Controls}>
            <h1>Controls</h1>
            <div className={styles.Flex}>
                <input
                    placeholder="New task name"
                    className={styles.FS_1}
                    onChange={props.onChangeInput}
                    value={props.createInputValue}
                />
                <button
                    className={styles.Ml_1}
                    disabled={props.createInputValue === ""}
                    onClick={props.onCreateHandler}
                >
                    Create
                </button>
            </div>
            <div className={[styles.Mt_1, styles.Flex].join(" ")}>
                <input
                    readOnly
                    placeholder="Selected task name"
                    className={styles.FS_1}
                    value={props.selectedInputValue}
                />
                <button
                    className={styles.Ml_1}
                    disabled={props.selectedInputValue === ""}
                    onClick={props.onMoveBackHandler}
                >
                    Move back
                </button>
                <button
                    className={styles.Ml_1}
                    disabled={props.selectedInputValue === ""}
                    onClick={props.onMoveForwardHandler}
                >
                    Move forward
                </button>
                <button
                    className={styles.Ml_1}
                    disabled={props.selectedInputValue === ""}
                    onClick={props.onDeleteHandler}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Controls;
