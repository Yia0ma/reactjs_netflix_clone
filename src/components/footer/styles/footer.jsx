import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 3em 2em;
    margin: auto;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1em;

    @media (max-width: 949px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Title = styled.p`
    font-size: 1rem;
    color: #757575;
    margin-bottom: 1.87em;
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 1.2em;
    font-size: .81rem;
    text-decoration: none;
`;

export const Text = styled.p`
    font-size: .81rem;
    color: #757575;
    margin-top: 1.5em;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;