import React, {useState} from "react";
import {Link as ReachRouterLink} from "react-router-dom";
import { 
    Background, 
    Container, 
    Logo, 
    ButtonLink, 
    Text, 
    Link, 
    Group, 
    Feature, 
    FeatureCallOut, 
    PlayButton,
    Search,
    SearchIcon,
    SearchInput} from "./styles/header";

const Header = ({bg=true, children, ...props}) => 
    bg ? <Background {...props}>{children}</Background> : children;

Header.Frame = ({children, ...props}) => <Container {...props}>{children}</Container>;

Header.Group = ({children, ...props}) => <Group {...props}>{children}</Group>;

Header.Logo = ({to, ...props}) => (
    <ReachRouterLink to={to}>
        <Logo  {...props}/>
    </ReachRouterLink>
);

Header.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

Header.Link = ({children, ...props}) => <Link {...props}>{children}</Link>;

Header.ButtonLink = ({children, ...props}) => <ButtonLink {...props}>{children}</ButtonLink>

Header.Feature = ({children, ...props}) => <Feature {...props}>{children}</Feature>;

Header.FeatureCallOut = ({children, ...props}) => <FeatureCallOut {...props}>{children}</FeatureCallOut>;

Header.PlayButton = ({children, ...props}) => <PlayButton {...props}>{children}</PlayButton>;

Header.Search = ({searchTerm, setSearchTerm, ...props}) => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...props}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="images/icons/search.png" alt="Search"/>
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search movies and series"
                active={searchActive}
            />
        </Search>
    );
}
export default Header;