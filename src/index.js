import React from "react";
import ReactDOM from "react-dom";
import {GlobalStyles} from "./globalStyles";
import App from "./app";

ReactDOM.render(
    <>
        <GlobalStyles/>
        <App/>
    </>,
    document.getElementById("root")
);