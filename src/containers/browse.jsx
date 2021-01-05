import React, {useContext, useState} from "react";
import {Header} from "../components";
import * as ROUTES from "../constants/routes";
import {FirebaseContext} from "../context/firebase";
import SelectProfileConatiner, {SelectProfileContainer} from "./profiles";
import FooterContainer from "./footer";

const BrowseContainer = () => {
    const [category, setCategory] = useState("series");
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext);

    const user = {
        displayName: "Yaoma",
        photoUrl: "1"
    }

    return profile.displayName ? (
        <>
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="images/misc/logo.svg" alt="Netflix"/>
                        <Header.Link
                            active={category === "series" ? "true" : "false"}
                            onClick={() => setCategory("series")}
                        >
                            Series
                        </Header.Link>
                        <Header.Link 
                            active={category === "series" ? "true" : "false"}
                            onClick={() => setCategory("series")}
                        >
                            Movies
                        </Header.Link>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <FooterContainer/>
        </>)
        : (<SelectProfileConatiner user={user} setProfile={setProfile}/>);
};

export default BrowseContainer;