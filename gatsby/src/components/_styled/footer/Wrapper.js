import styled from 'styled-components'

export default styled.footer`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  background: ${props => props.theme.color.darkGrey};
  justify-items: center;
  .gatsby-image-wrapper {
    width: 500px;
  }
  @media (${props => props.theme.device.mobile}) {
    height: auto;
    grid-template-columns: 1fr;
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`
