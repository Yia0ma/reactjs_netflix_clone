import React, {useState} from "react";
import {Container, Inner, Frame, Item,  Title, Header, Body} from "./styles/accordion";

const Accordion = ({children, ...props}) => (
    <Container {...props}>
        <Inner>{children}</Inner>
    </Container>
);

Accordion.Frame = ({children, ...props}) => <Frame {...props}>{children}</Frame>;

Accordion.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

Accordion.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Accordion.Header = ({children, ...props}) => <Header {...props}>{children}</Header>;

Accordion.Body = ({children, ...props}) => <Body {...props}>{children}</Body>;

export default Accordion;