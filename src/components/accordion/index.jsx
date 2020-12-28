import React, {useState} from "react";
import {Container, Item, Inner, Title, Header, Body} from "./styles/accordion";

const Accordion = ({children, ...props}) => (
    <Container {...props}>
        <Inner>{children}</Inner>
    </Container>
);

Accordion.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

Accordion.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Accordion.Header = ({children, ...props}) => <Header {...props}>{children}</Header>;

Accordion.Body = ({children, ...props}) => <Body {...props}>{children}</Body>;

export default Accordion;