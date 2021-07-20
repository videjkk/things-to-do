import styled from "styled-components";

const Cell = styled.div`

    color: ${ (props) => props.priority ? (props.priority !== 'minor' ? 'red' : 'green') : '#fff'};
    
`;

export default Cell;