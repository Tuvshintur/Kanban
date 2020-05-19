import React from "react";
import "./Button.css";

const button = (props) => {
    return (
        <button className={props.type} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;
