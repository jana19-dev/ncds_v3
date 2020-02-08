import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.palette.background};
  .active {
    background: ${props => props.theme.palette.secondary};
  }
  color: ${props => props.theme.palette.primary};
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  @media (max-width: 768px) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0px;
  }
  transition-property: opacity, visibility, height;
  transition-duration: 0.5s;
`
