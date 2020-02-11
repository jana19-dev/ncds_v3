import styled from 'styled-components'
import { Link } from 'gatsby'

export default styled(Link)`
  background: ${props =>
    props.theme.isDarkMode ? props.theme.color.lightTeal : props.theme.color.teal
  };
  color: ${props => props.theme.color.lightGrey};
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover, &:focus {
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.2);
    background: #055e68;
    outline: none;
  }
  text-decoration: none;
  h3 {
    margin: 10px;
  }
  img {
    width: 100%;
    height: 250px;
  }
  p {
    color: ${props => props.theme.color.lightGrey};
  }
`
