import React from "react";

import BackDrop from "../../UI/BackDrop/BackDrop";
import Logo from "../../Logo/Logo";
import "./SideDrawer.css";

const sideDrawer = (props) => {
    let classes = ["SideDrawer", "Close"];
    if (props.open) {
        classes = ["SideDrawer", "Open"];
    }

    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.close}></BackDrop>
            <div className={classes.join(" ")}>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>{/* <NavigationItems /> */}</nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
