import React from "react";
import {Container, Row, Column, Link, Title, Break, Text} from "./styles/footer";

const Footer = ({children, ...props}) => <Container {...props}>{children}</Container>;

Footer.Row = ({children, ...props}) => <Row {...props}>{children}</Row>;

Footer.Column = ({children, ...props}) => <Column {...props}>{children}</Column>;

Footer.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Footer.Link = ({children, ...props}) => <Link {...props}>{children}</Link>;

Footer.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

Footer.Break = ({...props}) => <Break {...props}/>;

export default Footer;