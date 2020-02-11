import styled from 'styled-components'
import { Link } from 'gatsby'

export default styled(Link)`
  width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  outline: none;
  &:hover, &:focus {
    background: ${props => props.theme.color.lightTeal};
  }
  transition-property: background;
  transition-duration: 0.3s;
`
