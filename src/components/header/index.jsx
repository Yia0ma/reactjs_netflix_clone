import React from "react";
import {Link as ReachRouterLink} from "react-router-dom";
import {Background, Container, Logo, ButtonLink} from "./styles/header";

const Header = ({bg=true, children, ...props}) => 
    bg ? <Background>{children}</Background> : children;

Header.Frame = ({children, ...props}) => <Container {...props}>{children}</Container>;

Header.Logo = ({to, ...props}) => (
    <ReachRouterLink to={to}>
        <Logo  {...props}/>
    </ReachRouterLink>
);

Header.ButtonLink = ({children, ...props}) => <ButtonLink {...props}>{children}</ButtonLink>

export default Header;