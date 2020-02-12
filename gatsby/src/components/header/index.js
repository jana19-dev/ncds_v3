import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'

import Banner from '../_styled/header/Banner'
import DesktopTopBar from '../_styled/header/DesktopTopBar'
import MobileTopBar from '../_styled/header/MobileTopBar'
import MobileSideBar from '../_styled/header/MobileSideBar'
import DarkModeToggleButton from '../_styled/header/DarkModeToggleButton'
import NavLinkItem from '../_styled/header/NavLinkItem'

import { Sun as SunIcon } from 'styled-icons/boxicons-solid/Sun'
import { Moon as MoonIcon } from 'styled-icons/boxicons-solid/Moon'
import { Menu as MenuIcon } from 'styled-icons/boxicons-regular/Menu'

import Logo from '../_styled/header/Logo'

const links = [
  { label: 'நயினாதீவு', page: '/' },
  { label: 'அபிவிருத்திகள்', page: '/contributions' },
  { label: 'வெளியீடுகள்', page: '/publications' },
  { label: 'செய்திகள்', page: '/news' },
  { label: 'புகைப்படங்கள்', page: '/gallery' },
  { label: 'நிகழ்வுகள்', page: '/events' },
  { label: 'துயர்வுகள்', page: '/obituaries' },
  { label: 'தொடர்புகள்', page: '/contact' }
]

const Header = ({ title, toggleDarkMode, isDarkMode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const sidebar = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleSideBarOutsideClick)
    document.addEventListener('transitionend', handleSideBarOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleSideBarOutsideClick)
      document.removeEventListener('transitionend', handleSideBarOutsideClick)
    }
  }, [])

  const handleSideBarOutsideClick = e =>
    !sidebar.current.contains(e.target) && setIsSideBarOpen(false)

  const renderNavLink = ({ page, label }, pathname) => (
    <NavLinkItem
      key={page}
      to={page}
      activeClassName='active'
      partiallyActive={
        page !== '/' && Boolean(pathname.match(new RegExp(`^${page}(/)?$`)))
      }
    >
      {label}
    </NavLinkItem>
  )

  return (
    <Location>
      {({ location }) => (
        <header>
          <DarkModeToggleButton onClick={toggleDarkMode}>
            {isDarkMode ? <MoonIcon size={23} /> : <SunIcon size={23} />}
          </DarkModeToggleButton>

          <Banner>
            <Logo />
            <h1>
              நயினாதீவு - கனேடியர் அபிவிருத்திச் சங்கம் <br />
              Nainativu Canadian Development Society
            </h1>
          </Banner>

          <DesktopTopBar>
            {links.map(link => renderNavLink(link, location.pathname))}
          </DesktopTopBar>

          <MobileTopBar>
            <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
              <MenuIcon size={25} />
            </button>
            <h1>{title}</h1>
          </MobileTopBar>

          <MobileSideBar open={isSideBarOpen} ref={sidebar}>
            <Logo />
            <div className='linksWrapper'>
              {links.map(link => renderNavLink(link, location.pathname))}
            </div>
          </MobileSideBar>
        </header>
      )}
    </Location>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
