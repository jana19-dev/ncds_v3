import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Location } from '@reach/router'

const Header = ({ title }) => {
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
          <header>
            <div>
              <h1>
                <Link to='/'>
                  {`${title} | ${data.site.siteMetadata.title}`}
                </Link>
              </h1>
            </div>
          </header>
        )
      }}
    </Location>

  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
