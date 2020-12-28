import React from "react";

import {Container, Item, Inner, Title, SubTitle} from "./styles/jumbotron";


const Jumbotron = ({children, direction = "row", ...props}) => {
    return (
        <Item {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
};

Jumbotron.Container = ({children, ...props}) => 
    <Container {...props}>{children}</Container>;

Jumbotron.Title = ({children, ...props}) => 
    <Title {...props}>{children}</Title>;

Jumbotron.SubTitle = ({children, ...props}) => 
    <SubTitle {...props}>{children}</SubTitle>;

export default Jumbotron;