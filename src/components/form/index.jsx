import React from "react";

const Form = ({children, ...props}) => <Container {...props}>{children}</Container>;

Form.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

Form.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Form.Error = ({children, ...props}) => <Error {...props}>{children}</Error>;

Form.Input = ({...props}) => <Input {...props}/>;

Form.Button = ({children, ...props}) => <Button {...props}>{children}</Button>;

export default Form;