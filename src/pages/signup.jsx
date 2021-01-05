import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import {Form} from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

const SignUp = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = 
        firstName === "" | 
        emailAddress === "" |
        password === "";

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoUrl: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    setEmailAddress("");
                    setPassword("");
                    setError("");
                    history.push(ROUTES.BROWSE);
                }).catch((error) => setError(error.message))
            )
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
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
                            Sign Up
                        </Form.Button>
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_UP}>Sign in please</Form.Link>.
                        </Form.Text>
                        <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
};

export default SignUp;