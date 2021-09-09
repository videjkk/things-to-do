import styled from 'styled-components'

const Priority = styled.div`
  color: ${(props) =>
    props.priority ? (props.priority !== 'minor' ? 'red' : 'green') : '#fff'};
`

export default Priority
