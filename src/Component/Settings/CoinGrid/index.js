import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../../../Provider/AppProvider'
import {SelectableTile} from '../../Shared/Tile'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
`
export default function () {
  return (
    <AppContext.Consumer>
      {({coinList}) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((coinKey) => (
            <SelectableTile>{coinKey}</SelectableTile>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  )
}
