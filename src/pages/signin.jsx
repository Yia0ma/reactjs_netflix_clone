import React, {useState} from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import {Form} from "../components";

const Signin = () => {
    const [error, setError] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();
    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        autoComplete="off"
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Button disabled="false" type="submit">
                        Sign In
                    </Form.Button>
                    <Form.Text>
                        New to Netflix? <Form.Link>Sign up now</Form.Link>.
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    );
};

export default Signin