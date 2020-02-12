import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.color.teal};
  color: ${props => props.theme.color.lightGrey};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 5fr;
  justify-items: center;
  align-items: center;
  text-align: center;
  .gatsby-image-wrapper {
    justify-self: right;
    margin: 10px;
  }
  h1 {
    justify-self: left;
    margin: 0;
    font-size: 2.2vw;
    @media (${props => props.theme.device.mobile}) {
      font-size: 3vw;
    }
  }
`
