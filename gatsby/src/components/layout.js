import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './header'
import Seo from '../components/seo'
import theme from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const Layout = ({ title, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.localStorage.getItem('isDarkMode') === 'true'
  )

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    window.localStorage.setItem('isDarkMode', !isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <Seo title={title} />
      <Header title={title} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>{children}</main>
      <footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
