import React from "react";
import {Container, Title, List, Item, Picture, Name} from "./styles/profiles";

const Profiles = ({children, ...props}) => <Container {...props}>{children}</Container>;

Profiles.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Profiles.List = ({children, ...props}) => <List {...props}>{children}</List>;

Profiles.User = ({children, ...props}) => <Item {...props}>{children}</Item>;

Profiles.Picture = ({src, ...props}) => <Picture {...props} src={src ? `images/users/${src}.png` : "images/misc/loading.gif"} />

Profiles.Name = ({children, ...props}) => <Name {...props}>{children}</Name>;

export default Profiles;