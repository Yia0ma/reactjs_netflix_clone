import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup">
                    <h1>Sign Up</h1>
                </Route>
                <Route path="/signin">
                    <h1>Sign In</h1>
                </Route>
                <Route path="/browse">
                    <h1>Browse</h1>
                </Route>
                <Route path="/">
                    <h1>Home</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;