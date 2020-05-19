import React, { Component } from "react";

import Layout from "./components/Containers/Layout/Layout";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Button from "./components/UI/Button/Button";

class App extends Component {
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
            <React.Fragment>
                <Layout>
                    <Button clicked={this.sideDrawerToggleHandler}>Toggle</Button>
                    <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}></SideDrawer>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
