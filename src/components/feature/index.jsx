import React from "react";
import {Container, Title, SubTitle} from "./styles/feature";

const Feature = ({children, ...props}) => <Container {...props}>{children}</Container>;

Feature.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Feature.SubTitle = ({children, ...props}) => <SubTitle {...props}>{children}</SubTitle>;

export default Feature;