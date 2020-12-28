import React from "react";

import {Container, Item, Inner} from "./styles/jumbotron";


const Jumbotron = ({children, direction = "row", ...props}) => {
    return (
        <Item {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
};

Jumbotron.Container = ({children, ...props}) => 
    <Container {...props}>{children}</Container>;

export default Jumbotron;