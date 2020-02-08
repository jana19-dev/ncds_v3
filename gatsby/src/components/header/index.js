import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import styled from 'styled-components'

import ImageBannerDesktop from './ImgBannerDesktop'
import ImageBannerMobile from './ImgBannerMobile'
import ImageLogo from './ImgLogo'

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

const Desktop = styled.div`
  @media (max-width: 768px) {
    display: none
  }
`

const Mobile = styled.div`
  @media (min-width: 769px) {
    display: none
  }
`

const StyledDesktopTopBar = styled.div`
  background: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.primary};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  @media (max-width: 768px) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0px;
  }
  transition-property: opacity, visibility, height;
  transition-duration: 0.5s;
  .active {
    background: ${props => props.theme.palette.secondary};
  }
`

const StyledMobileTopBar = styled.div`
  background: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  height: 45px;
  @media (min-width: 769px) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0px;
  }
`

const StyledHeader = styled.h1`
  font-size: larger;
  font-weight: 100;
  padding-right: 20px;
`

const StyledSideBarToggleButton = styled.button`
  color: ${props => props.theme.palette.primary};
  background: none;
  border: none;
  font-size: larger;
  justify-self: left;
  padding-left: 20px;
`

const StyledSideBar = styled.div`
  background: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.primary};
  opacity: ${props => props.open ? 1 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  width: ${props => props.open ? '300px' : '0px'};
  text-align: center;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  @media (min-width: 769px) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    width: 0px;
  }
  transition-property: opacity, visibility, width;
  transition-duration: 0.4s;
  .gatsby-image-wrapper {
    margin-top: 10px;
    justify-self: center;
  }
`

const StyledSideBarLinks = styled.div`
  display: grid;
  grid-gap: 10px;
  font-size: larger;
  padding-top: 16px;
  height: 80vh;
  overflow-y: auto;
  .active {
    background: ${props => props.theme.palette.secondary};
  }
`

const StyledNavLink = styled(Link)`
  width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  outline: none;
  &:hover, &:focus {
    background: ${props => props.theme.palette.secondary};
  }
  transition-property: background;
  transition-duration: 0.3s;
`

const StyledToggleDarkMode = styled.button`
  color: ${props => props.theme.palette.primary};
  background: none;
  border: none;
  font-size: larger;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`

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
    <StyledNavLink
      key={link.page}
      to={link.page}
      activeClassName='active'
    >
      {link.label}
    </StyledNavLink>
  )

  return (
    <Location>
      {({ location }) => {
        return (
          <header>
            <StyledToggleDarkMode onClick={toggleDarkMode}>
              <i className={isDarkMode ? 'fas fa-moon' : 'fas fa-sun'} />
            </StyledToggleDarkMode>
            <Desktop>
              <ImageBannerDesktop />
            </Desktop>
            <Mobile>
              <ImageBannerMobile />
            </Mobile>
            <StyledDesktopTopBar>
              {links.map(renderNavLink)}
            </StyledDesktopTopBar>
            <StyledMobileTopBar>
              <StyledSideBarToggleButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                <i className='fas fa-bars' />
              </StyledSideBarToggleButton>
              <StyledHeader>{title}</StyledHeader>
            </StyledMobileTopBar>
            <StyledSideBar open={isSideBarOpen} ref={sidebar}>
              <ImageLogo />
              <StyledSideBarLinks>
                {links.map(renderNavLink)}
              </StyledSideBarLinks>
            </StyledSideBar>
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
