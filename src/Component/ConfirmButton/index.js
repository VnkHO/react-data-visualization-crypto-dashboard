import React from 'react'
import styled from 'styled-components'

import {AppContext} from '../../Provider/AppProvider'

import {fontSize1, greenBoxShadow, color3} from '../Shared/Styles'

const ConfirmButtonStyled = styled.div`
  margin: 2rem;
  color: ${color3};

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
      {({confirmFavorites}) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  )
}

export default ConfirmButton
