import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.SING_UP}>
                    <h1>Sign Up</h1>
                </Route>
                <Route path={ROUTES.SING_IN}>
                    <h1>Sign In</h1>
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <h1>Browse</h1>
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;