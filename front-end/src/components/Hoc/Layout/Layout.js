import React, { Component } from "react";

import Aux from "../Auxiliary/Auxiliary";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../Navigation/ToolBar/Toolbar";

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
                <main>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
