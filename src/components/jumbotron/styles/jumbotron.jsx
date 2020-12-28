import styled from "styled-components";

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({direction}) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 4.38em 2.81em;
    color: #fff;
    overflow: hidden;
`;

export const Pane = styled.div`
    width: 50%;
    
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 2.3em;
        text-align: center;
    }
`;

export const Container = styled.section`
    background-color: #000;
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: .5rem;

    @media (max-width: 949px) {
        font-size: 2.5rem;
    }

    @media (max-width: 549px) {
        font-size: 1.625rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;
    margin: .75em 0 .25em;

    @media (max-width: 949px) {
        font-size: 1.25rem;
        margin-bottom: 1em;
    }

    @media (max-width: 549px) {
        font-size: 1.125rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;
