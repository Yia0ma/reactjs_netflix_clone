import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    @media (max-width: 949px) {
        flex-direction: column;
        align-items: center;
    }

`;

export const Text = styled.p`
    font-size: 1.2rem;
    color: #fff;
    padding: 0 5%;
    padding-bottom: 1.25em;

    @media (max-width: 949px) {
        font-size: 1.5rem;
        padding-bottom: .5em;
    }

    @media (max-width: 549px) {
        font-size: 1.13rem;
    }
`;

export const Input = styled.input`
    width: 500px;
    padding: 1.2em;
    font-size: 1rem;

    @media (max-width: 949px) {
        margin-bottom: 1em;
    }

    @media (max-width: 549px) {
        width: 90%;
    }
`;

export const Button = styled.button`
    font-size: 1.625rem;
    background-color: #e50914;
    color: #fff;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: .3em 1em;
    justif-content: space-between;
    border: none;
    gap: .5em;
    cursor: pointer;
    
    img {
        filter: brightness(0) invert(1);
        width: 1em;
    }

    @media (max-width: 949px) {
        margin-bottom: 1em;
        font-size: 1rem;
        padding: .8em 1em;
    }
`;