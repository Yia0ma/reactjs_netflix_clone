import React from "react";
import {Link as ReachRouterLink} from "react-router-dom";
import {Background, Container, Logo, ButtonLink, Text, Link, Group} from "./styles/header";

const Header = ({bg=true, children, ...props}) => 
    bg ? <Background {...props}>{children}</Background> : children;

Header.Frame = ({children, ...props}) => <Container {...props}>{children}</Container>;

Header.Group = ({children, ...props}) => <Group {...props}>{children}</Group>;

Header.Logo = ({to, ...props}) => (
    <ReachRouterLink to={to}>
        <Logo  {...props}/>
    </ReachRouterLink>
);

Header.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

Header.Link = ({children, ...props}) => <Link {...props}>{children}</Link>;

Header.ButtonLink = ({children, ...props}) => <ButtonLink {...props}>{children}</ButtonLink>

export default Header;