import React from 'react'
import styled from 'styled-components'

import {AppContext} from '../../Provider/AppProvider'

import {fontSize1, greenBoxShadow} from '../Shared/Styles'

const ConfirmButtonStyled = styled.div`
  margin: 2rem;
  color: ${(props) => (!props.isDark ? '#42ff3a' : '#09f010')};

  ${fontSize1};
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow};
  }
`

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({confirmFavorites, isDark}) => (
        <CenterDiv>
          <ConfirmButtonStyled isDark={isDark} onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  )
}

export default ConfirmButton
