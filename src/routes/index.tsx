import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

// Pages
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        {/* Account */}
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default Routes;
