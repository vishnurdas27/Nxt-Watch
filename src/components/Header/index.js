import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon, FaSun, FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import AppContext from '../../context/AppContext'

import {
  HeaderBackgroundContainer,
  HeaderContent,
  WebSiteLogo,
  HeaderMenu,
  CustomButton,
  HamburgerButton,
  LogOutIcon,
  ProfileImage,
  LogOutButton,
  PopupContentContainer,
  PopupInstruction,
  PopupButtonContainer,
  PopupCancelButton,
  PopupConformButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const renderHeaderMenu = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onClickDarkTheme = () => toggleTheme()

        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDarkTheme ? (
          <FaSun size={30} color="#ffffff" />
        ) : (
          <FaMoon size={30} />
        )

        return (
          <>
            <Link to="/">
              <WebSiteLogo src={logoUrl} alt="website logo" />
            </Link>

            <HeaderMenu>
              {/* Theme toggle */}
              <CustomButton
                type="button"
                onClick={onClickDarkTheme}
                data-testid="theme"
              >
                {themeIcon}
              </CustomButton>

              {/* ✅ Profile image */}
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              {/* ✅ Logout popup trigger */}
              <Popup
                modal
                trigger={<LogOutButton type="button">Logout</LogOutButton>}
              >
                {close => (
                  <PopupContentContainer>
                    <PopupInstruction>
                      Are you sure, you want to logout
                    </PopupInstruction>
                    <PopupButtonContainer>
                      <PopupCancelButton type="button" onClick={close}>
                        Cancel
                      </PopupCancelButton>
                      <PopupConformButton type="button" onClick={onClickLogout}>
                        Confirm
                      </PopupConformButton>
                    </PopupButtonContainer>
                  </PopupContentContainer>
                )}
              </Popup>

              {/* Mobile logout icon */}
              <Popup
                modal
                trigger={
                  <LogOutIcon type="button">
                    <FiLogOut size={30} />
                  </LogOutIcon>
                }
              >
                {close => (
                  <PopupContentContainer>
                    <PopupInstruction>
                      Are you sure, you want to logout
                    </PopupInstruction>
                    <PopupButtonContainer>
                      <PopupCancelButton type="button" onClick={close}>
                        Cancel
                      </PopupCancelButton>
                      <PopupConformButton type="button" onClick={onClickLogout}>
                        Confirm
                      </PopupConformButton>
                    </PopupButtonContainer>
                  </PopupContentContainer>
                )}
              </Popup>

              <HamburgerButton type="button">
                <FaBars size={30} />
              </HamburgerButton>
            </HeaderMenu>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HeaderBackgroundContainer isDarkTheme={isDarkTheme}>
            <HeaderContent>{renderHeaderMenu()}</HeaderContent>
          </HeaderBackgroundContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
