import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.color.teal};
  .active {
    background: ${props => props.theme.color.lightTeal};
  }
  color: ${props => props.theme.color.lightGrey};
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  @media (${props => props.theme.device.mobile}) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0px;
  }
  transition-property: opacity, visibility, height;
  transition-duration: 0.5s;
`
