import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './header'
import Seo from '../components/seo'
import Footer from './footer'
import theme from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background: ${props =>
      props.theme.isDarkMode ? props.theme.color.darkTeal : props.theme.color.lightGrey
    };
    color: ${props =>
      props.theme.isDarkMode ? props.theme.color.lightGrey : props.theme.color.darkTeal
    };
    min-width: 320px;
    main {
      min-height: 80vh;
      padding: 20px;
      text-align: center;
    }
  }
`

const Layout = ({ title, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    (typeof window !== 'undefined')
      ? window.localStorage.getItem('isDarkMode') === 'true'
      : false
  )

  const toggleDarkMode = () => {
    window.localStorage.setItem('isDarkMode', !isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={{ ...theme, isDarkMode }}>
      <GlobalStyle />
      <Seo title={title} />
      <Header title={title} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
