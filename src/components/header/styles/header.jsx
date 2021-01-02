import styled from "styled-components";
import {Link as ReachRouterLink} from "react-router-dom";

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? "../images/misc/${src}.jpg" : "../images/misc/home-bg.jpg")})
        top left / cover no-repeat;

    @media (max-width: 949px) {
        ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && "background: none;"}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 3.5em;
    height: 4em;
    padding: 1.12em 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 949px) {
        margin: 0 1.88em;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 1.88em;
    font-weight: ${({active}) => (active === "true" ? "700" : "400")};
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }

    &:last-of-type: {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: #fff;
    border: none;
    font-size: 1rem;
    border-radius: 3px;
    padding: .5em 1em;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: #f40612;
    }
`;

export const Logo = styled.img`
    height: 2em;
    width: 6.75em;
    margin-right: 2.5em;

    @media (min-width: 1449px) {
        height: 2.81em;
        width: 10.43em;
    }
`;