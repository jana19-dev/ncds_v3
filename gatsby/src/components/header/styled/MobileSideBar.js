import styled from 'styled-components'

export default styled.div`
  background: #0d2a31;
  color: #ffffff;
  opacity: ${props => props.open ? 1 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  width: ${props => props.open ? '300px' : '0px'};
  text-align: center;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  @media (min-width: 769px) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    width: 0px;
  }
  transition-property: opacity, visibility, width;
  transition-duration: 0.4s;
  .gatsby-image-wrapper {
    margin-top: 10px;
    justify-self: center;
  }
  .linksWrapper {
    display: grid;
    grid-gap: 10px;
    font-size: larger;
    padding-top: 16px;
    height: 80vh;
    overflow-y: auto;
    .active {
      background: #055e68;
    }
  }
`
