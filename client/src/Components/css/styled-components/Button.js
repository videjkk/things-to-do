import styled from "styled-components";

const Button = styled.button`
    padding: 4px;
    background-color: ${(props) => props.color };
    border: none;
    border-radius: 10px;
    font-size: 16px;
`;

export default Button;