import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

// Pages
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Grid from "../pages/Grid";

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        {/* Account */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/grid" component={Grid} />
    </Switch>
);

export default Routes;
