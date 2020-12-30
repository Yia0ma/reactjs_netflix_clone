import React from "react";
import {Container, Text, Input, Button} from "./styles/opt-form";

const OptForm = ({children, ...props}) => <Container {...props}>{children}</Container>;

OptForm.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

OptForm.Input = ({...props}) => <Input {...props}/>;

OptForm.Button = ({children, ...props}) => (
    <Button {...props}>
        {children}
        <img src="./images/icons/chevron-right.png" alt="Right arrow"/>
    </Button>
);

export default OptForm;