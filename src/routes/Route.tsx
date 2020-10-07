import React from "react";
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect,
} from "react-router-dom";

interface IRouteProps extends ReactDOMRouteProps {
    component: React.ComponentType;
    permission?: string;
}

// Route/Is User Authenticated?
// true/true = OK
// true/false = Redirect to signin
// false/true = Redirect to Dashboard
// false/false = OK

const Route: React.FC<IRouteProps> = ({
    component: Component,
    permission,
    ...rest
}) => {
    return (
        <ReactDOMRoute
            {...rest}
            // To keep history
            render={({ location }) => {
                return <Component />;
            }}
        />
    );
};

export default Route;
