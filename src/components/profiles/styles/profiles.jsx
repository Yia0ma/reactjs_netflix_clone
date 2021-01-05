import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    margin-top: 5em;
    justify-content: center;
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
`;

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 1rem;
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;
    cursor: pointer;

    &:hover > ${Picture} {
        border: 3px solid #fff;
    }

    &:hover > ${Name} {
        font-weight: 700;
        color: #fff;
    }

    &:last-of-type: {
        margin-right: 0;
    }
`;