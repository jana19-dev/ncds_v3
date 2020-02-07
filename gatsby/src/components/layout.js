import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import Header from './header'
import Seo from '../components/seo'
import theme from '../utils/theme'

const Layout = ({ title, children }) => {
  return (
    <>
      <Seo title={title} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={title} />
        <div>
          <main>{children}</main>
          <footer />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
