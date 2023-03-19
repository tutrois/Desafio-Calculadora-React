import styled from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 15px;
    border: 1px solid #202020;
    background-color: ${(props) => props.color == null ? "#3b3b3b" : String(props.color)};;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    flex: 1;
    border-radius: 5px;
    margin-right:1px ;

    &:hover{
        opacity: 0.9;
        background-color: #323232;
    }
`