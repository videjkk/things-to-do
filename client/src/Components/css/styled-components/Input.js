import styled from "styled-components";

const Input = styled.input.attrs( props => (
    {
    type:"search",
    placeholder:"Search a thing to do...",
    onChange: props.searching}
))`
    font-size: 14px;
    outline: none;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #808080;
    padding: 10px 0px;    

`;

export default Input;