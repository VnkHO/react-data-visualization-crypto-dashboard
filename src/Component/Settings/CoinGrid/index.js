import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../../../Provider/AppProvider'
import {SelectableTile} from '../../Shared/Tile'
import CoinTile from '../CoinTile'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  margin-top: 4rem;
`

function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 100)
}

export default function () {
  return (
    <AppContext.Consumer>
      {({coinList}) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList).map((coinKey, index) => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  )
}
