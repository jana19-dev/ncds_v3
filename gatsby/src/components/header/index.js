import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'

import Responsive from '../_common/Responsive'
import DesktopTopBar from './styled/DesktopTopBar'
import MobileTopBar from './styled/MobileTopBar'
import MobileSideBar from './styled/MobileSideBar'
import DarkModeToggleButton from './styled/DarkModeToggleButton'
import NavLinkItem from './styled/NavLinkItem'

import ImageBannerDesktop from './images/ImgBannerDesktop'
import ImageBannerMobile from './images/ImgBannerMobile'
import ImageLogo from './images/ImgLogo'

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

  const renderNavLink = link => (
    <NavLinkItem
      key={link.page}
      to={link.page}
      activeClassName='active'
    >
      {link.label}
    </NavLinkItem>
  )

  return (
    <Location>
      {({ location }) => {
        return (
          <header>
            <DarkModeToggleButton onClick={toggleDarkMode}>
              <i className={isDarkMode ? 'fas fa-moon' : 'fas fa-sun'} />
            </DarkModeToggleButton>

            <Responsive desktop> <ImageBannerDesktop /> </Responsive>
            <Responsive mobile> <ImageBannerMobile /> </Responsive>

            <DesktopTopBar>
              {links.map(renderNavLink)}
            </DesktopTopBar>

            <MobileTopBar>
              <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                <i className='fas fa-bars' />
              </button>
              <h1>{title}</h1>
            </MobileTopBar>

            <MobileSideBar open={isSideBarOpen} ref={sidebar}>
              <ImageLogo />
              <div className='linksWrapper'> {links.map(renderNavLink)} </div>
            </MobileSideBar>
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
