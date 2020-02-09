import styled from 'styled-components'

export default styled.button`
  color: ${props => props.theme.text.secondary};
  background: none;
  border: none;
  font-size: larger;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`
