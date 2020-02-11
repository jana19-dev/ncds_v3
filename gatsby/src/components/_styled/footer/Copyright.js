import styled from 'styled-components'

export default styled.div`
  color: ${props => props.theme.color.lightGrey};
  display: grid;
  align-items: center;
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`
