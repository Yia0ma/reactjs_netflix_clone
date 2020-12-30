import React, {useState, useContext, createContext} from "react";
import {Container, Inner, Frame, Item,  Title, Header, Body} from "./styles/accordion";

const ToggleContext = createContext();

const Accordion = ({children, ...props}) => (
    <Container {...props}>
        <Inner>{children}</Inner>
    </Container>
);

Accordion.Frame = ({children, ...props}) => <Frame {...props}>{children}</Frame>;

Accordion.Item = ({children, ...props}) => {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...props}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Accordion.Header = ({children, ...props}) => {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...props}>
            {children}
            {toggleShow ? 
                <img src="./images/icons/close-slim.png" alt="Close"/> :
                <img src="./images/icons/add.png" alt="Open"/>
            }
        </Header>
    );
};

Accordion.Body = ({children, ...props}) => {
    const {toggleShow} = useContext(ToggleContext);

    return (toggleShow ? <Body {...props}>{children}</Body> : null);
};

export default Accordion;