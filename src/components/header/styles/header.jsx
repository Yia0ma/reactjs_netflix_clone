import styled from "styled-components";
import {Link as ReachRouterLink} from "react-router-dom";

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg")})
        top left / cover no-repeat;

    @media (max-width: 949px) {
        ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && "background: none;"}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 3.5em;
    height: 4em;
    padding: 3em 0;
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

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    color: #fff;
    font-size: 22px;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const FeatureCallOut = styled.h2`
    color: #fff;
    font-size: 50px;
    line-height: 1.2;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background: #ff1e1e;
        color: #fff;
    }
`;
