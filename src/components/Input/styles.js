import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    input{
        height: 75px;
        background-color: #202020;
        border: 0;
        text-align: right;
        padding: 0 11px;

        font-size: 35px;
        font-family: 'Roboto';
        color: white;
    }

    .calculation{
        font-size: 18px;
        padding: 0 15px;
    }
`