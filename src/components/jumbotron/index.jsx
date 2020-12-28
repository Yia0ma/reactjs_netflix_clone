import React from "react";
import {Container, Pane, Item, Inner, Title, SubTitle, Image} from "./styles/jumbotron";

const Jumbotron = ({children, direction="row", ...props}) => (
    <Item {...props}>
        <Inner direction={direction}>{children}</Inner>
    </Item>
);

Jumbotron.Container = ({children, ...props}) => <Container {...props}>{children}</Container>;

Jumbotron.Pane = ({children, ...props}) => <Pane {...props}>{children}</Pane>;

Jumbotron.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Jumbotron.SubTitle = ({children, ...props}) => <SubTitle {...props}>{children}</SubTitle>;

Jumbotron.Image = ({...props}) => <Image {...props}/>;

export default Jumbotron;