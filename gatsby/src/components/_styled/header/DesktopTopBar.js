import styled from 'styled-components'

export default styled.div`
  background: #0d2a31;
  .active {
    background: #055e68;
  }
  color: #ffffff;
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
