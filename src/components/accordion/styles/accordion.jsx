import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
    width: 100%;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    margin: auto;

    @media (max-width: 549px) {
        width: 100%;
        padding: 4.38em 0;
    }

    @media (max-width: 549px) {
        width: 100%;
        padding: 3.12em 0;
    }
`;

export const Frame = styled.div`
    width: 75%;
    margin: 2em auto;

    @media (max-width: 949px) {
        width: 90%;
    }

    @media (max-width: 549px) {
        width: 100%;
    }
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: .5em;
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: .5rem;
    color: #fff;
    text-align: center;
    padding: 0 5%;

    @media (max-width: 949px) {
        font-size: 2.5rem;
    }

    @media (max-width: 549px) {
        font-size: 1.625rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-weight: normal;
    font-size: 1.63rem;
    background-color: #303030;
    padding: .8em 1.2em .8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 1em;
    }

    @media (max-width: 949px) {
        font-size: 1.25rem;
    }

    @media (max-width: 549px) {
        font-size: 1.13rem;
    }
`;

export const Body = styled.div`
    max-width: 1200px;
    font-size: 1.63rem;
    font-weight: normal;
    line-height: normal;
    background-color: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;

    @media (max-width: 949px) {
        font-size: 1.25rem;
    }

    @media (max-width: 549px) {
        font-size: 1.13rem;
    }
`;