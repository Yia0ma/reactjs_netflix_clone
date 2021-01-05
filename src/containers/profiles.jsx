import React, { useReducer } from "react";
import {Header, Profiles} from "../components";
import * as ROUTES from "../constants/routes";

const SelectProfileConatiner = ({user, setProfile}) => (
    <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo 
                    to={ROUTES.HOME}
                    src="/images/misc/logo.svg"
                />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User 
                    onClick={() => setProfile({
                        displayName: user.displayName,
                        photoURL: user.photoUrl
                })}>
                    <Profiles.Picture src={user.photoUrl} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
);

export default SelectProfileConatiner;