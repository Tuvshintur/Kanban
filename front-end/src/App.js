import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import KanbanBoard from "./components/Containers/KanbanBoard/KanbanBoard";

import Layout from "./components/Containers/Layout/Layout";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={KanbanBoard} />
                    </Switch>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
