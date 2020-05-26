import React from "react";

import BackDrop from "../../UI/BackDrop/BackDrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import styles from "./SideDrawer.module.css";

const sideDrawer = (props) => {
    let classes = [styles.SideDrawer, styles.Close];
    if (props.open) {
        classes = [styles.SideDrawer, styles.Open];
    }

    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.close}></BackDrop>
            <div className={classes.join(" ")}>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>{<NavigationItems />}</nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
