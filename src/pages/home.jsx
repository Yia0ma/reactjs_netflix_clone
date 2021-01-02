import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import AccordionContainer from "../containers/accordion";
import HeaderContainer from "../containers/header";
import {Feature, OptForm} from "../components";

const Home = () => (
    <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Get started</OptForm.Button>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <AccordionContainer/>
        <FooterContainer/>
    </>
);

export default Home;