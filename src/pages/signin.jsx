import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import {FirebaseContext} from "../context/firebase";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import {Form} from "../components";
import * as ROUTES from "../constants/routes";

const Signin = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [error, setError] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const isInvalid = password === "" | emailAddress === "";

    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress("");
                setPassword("");
                setError("");
                history.push(ROUTES.BROWSE);
            }).catch((error) => setError(error.message));
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
                    <Form.Button disabled={isInvalid} type="submit">
                        Sign In
                    </Form.Button>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>.
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