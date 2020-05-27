import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem exact link="/">
            <div>Home</div>
        </NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
    </ul>
);

export default navigationItems;
