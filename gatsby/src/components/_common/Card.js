import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledCard = styled(Link)`
  background: ${props => props.isDarkMode ? '#00796b' : '#00796b'};
  color: #ffffff;
  height: 250px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.2);
    background: #055e68;
  }
  text-decoration: none;
  h3 {
    margin: 10px;
  }
  img {
    width: 100%;
    height: inherit;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`

export default ({ title, imageSrc, linkTo }) => (
  <StyledCard to={linkTo}>
    <h3>{title}</h3>
    <img src={imageSrc} alt={title} />
  </StyledCard>
)
