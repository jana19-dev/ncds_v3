import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import Seo from '../components/seo'
import theme from '../utils/theme'

const Layout = ({ title, children }) => {
  return (
    <>
      <Seo title={title} />
      <ThemeProvider theme={theme}>
        <Header title={title} />
        <main>{children}</main>
        <footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
