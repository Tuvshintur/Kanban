import React from "react";
import classes from "./Button.css";

const button = (props) => {
    return (
        <button className={classes[props.type]} onClick={props.clicked}>
            {props.name}
        </button>
    );
};

export default button;
