import React from "react";
import {Spinner, LockBody, ReleaseBody, Picture} from "./styles/loading";

const Loading = ({src, ...props}) => (
    <Spinner {...props}>
        <LockBody/>
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
);

Loading.ReleaseBody = ({...props}) => <ReleaseBody/>;

export default Loading;