import styled from "styled-components";

const EditedTitle = styled.input.attrs(props => ({
    value: props.value  
}))`
    border: none;
    outline: none;
    background: none;
    font-size: 18px;
    font-family: Raleway, sans-serif
`

export default EditedTitle