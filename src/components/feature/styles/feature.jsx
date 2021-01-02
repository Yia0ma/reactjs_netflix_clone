import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    padding: 6em 0;
    margin: 0 auto;

    @media (max-width: 949px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 4rem;

    @media (max-width: 549px) {
        font-size: 1.75em;
    }
`;

export const SubTitle = styled.h2`
    color: #fff;
    font-size: 1.62rem;
    margin: 1em 0;

    @media (max-width: 549px) {
        font-size: 1.13rem
    }
`;