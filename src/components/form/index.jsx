import React from "react";
import {Container, Base, Title, Text, TextSmall, Link, Error, Input, Button} from "./styles/form";

const Form = ({children, ...props}) => <Container {...props}>{children}</Container>;

Form.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

Form.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Form.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

Form.TextSmall = ({children, ...props}) => <TextSmall {...props}>{children}</TextSmall>;

Form.Link = ({children, ...props}) => <Link {...props}>{children}</Link>;

Form.Error = ({children, ...props}) => <Error {...props}>{children}</Error>;

Form.Input = ({children, ...props}) => <Input {...props}>{children}</Input>;

Form.Button = ({children, ...props}) => <Button {...props}>{children}</Button>;

export default Form;