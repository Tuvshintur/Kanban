import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Kanban from "./components/Containers/Kanban/Kanban";

import Layout from "./components/Containers/Layout/Layout";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Kanban} />
                    </Switch>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
