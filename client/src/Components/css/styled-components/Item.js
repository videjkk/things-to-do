import styled from "styled-components";


const Item = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  :first-child {
      padding: 10px 0px 0px 0px;
  }
`;

export default Item