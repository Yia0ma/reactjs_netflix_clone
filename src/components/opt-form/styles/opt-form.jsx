import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 1.5em;
    text-align: center;
    margin-top: 2em;
`;

export const Text = styled.p`
    font-size: 1.2rem;
    color: #fff;

    @media (max-width: 949px) {
        font-size: 1.25rem;
    }

    @media (max-width: 549px) {
        font-size: 1.13rem;
    }
`;

export const Input = styled.input`
    width: 500px;
    padding: 1em;

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
`;