import React from "react";
import BrowseContainer from "../containers/browse";
import {useContent} from "../hooks";

const Browse = () => {
    const {series} = useContent("series");
    const {films} = useContent("films");

    return <BrowseContainer/>;
};

export default Browse;