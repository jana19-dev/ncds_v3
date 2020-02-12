import styled from 'styled-components'

export default styled.footer`
  background: ${props => props.theme.color.teal};
  color: ${props => props.theme.color.lightGrey};
  display: grid;
  padding: 10px 0px;
  grid-template-columns: 3fr 2fr;
  justify-items: center;
  align-items: center;
  text-align: center;
  justify-items: center;
  margin: 0;
  font-size: 15px;
  p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (${props => props.theme.device.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`
