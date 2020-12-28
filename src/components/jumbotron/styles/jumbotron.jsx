import styled from "styled-components";

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({direction}) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
`;

export const Container = styled.section``;

export const Title = styled.h1`
    font-size: 2.5rem;
    line-height: 1.1;
    margin-bottom: .5rem;

    @media (max-width: 600px) {
        fonst-size: 2rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.14;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;
