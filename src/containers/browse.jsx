import React, {useState} from "react";
import {Header} from "../components";
import * as ROUTES from "../constants/routes";
import {FirebaseContext} from "../context/firebase";
import SelectProfileConatiner, {SelectProfileContainer} from "./profiles";
import FooterContainer from "./footer";

const BrowseContainer = () => {
    const [profile, setProfile] = useState();

    const user = {
        displayName: "Yaoma",
        plhotoUrl: "1"
    }

    return profile.displayName ? (
        <>
            <FooterContainer/>
        </>)
        : (<SelectProfileConatiner/>);
};

export default BrowseContainer;