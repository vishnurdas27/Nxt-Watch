import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

// Main container
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

// Sidebar container
export const SideBarContainer = styled.div`
  width: 20%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

// Content section (right side)
export const SavedVideoContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

// Header inside content (Saved Videos heading area)
export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 20px 30px;
  gap: 15px;
`

export const TrendingIcon = styled(HiFire)`
  color: #ff0000;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 50%;
  padding: 10px;
  height: 50px;
  width: 50px;
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

// Saved videos grid
export const SavedVideoCardContainer = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

// When there are no saved videos
export const FailureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 350px;
  max-width: 80%;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  margin-bottom: 10px;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  width: 90%;
  max-width: 400px;
`
