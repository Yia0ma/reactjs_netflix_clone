import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import AccordionContainer from "../containers/accordion";
import HeaderContainer from "../containers/header";

const Home = () => (
    <>
        <HeaderContainer/>
        <JumbotronContainer/>
        <AccordionContainer/>
        <FooterContainer/>
    </>
);

export default Home;