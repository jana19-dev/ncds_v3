import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Location } from '@reach/router'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 4em;
  background: ${props => props.theme.main};
`

const Header = ({ title, toggleDarkMode }) => {
  const data = useStaticQuery(graphql`
    query titleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <StyledHeader>
            <button onClick={toggleDarkMode}>
              Toggle Dark Mode
            </button>
            <div>
              <h1>
                <Link to='/'>
                  {`${title} | ${data.site.siteMetadata.title}`}
                </Link>
              </h1>
            </div>
          </StyledHeader>
        )
      }}
    </Location>

  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
