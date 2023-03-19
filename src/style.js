import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #202020;
    width: 70%;
    height: 50%; /* define uma altura*/
    border: 1.4px solid #7e1b8a;
    display: flex;
    flex-direction: column;
` 

export const Row = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1px;
`