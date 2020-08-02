import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background: #c90000;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 22px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin-bottom: 10px;
    &:hover,
    &:focus {
        background: #8f0000;
        
    }
`;

export default Button;