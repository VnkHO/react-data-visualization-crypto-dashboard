import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../../../Provider/AppProvider'
import {SelectableTile} from '../../Shared/Tile'
import CoinTile from '../CoinTile'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  grid-gap: 1.5rem;
  margin-top: 4rem;
`

function getLowerSectionCoin(coinList, filteredCoins) {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  )
}

function getCoinsToDisplay(coinList, topSection, favorites, filterCoins) {
  return topSection ? favorites : getLowerSectionCoin(coinList, filterCoins)
}

export default function ({topSection}) {
  return (
    <AppContext.Consumer>
      {({coinList, favorites, filteredCoins}) => (
        <CoinGridStyled>
          {getCoinsToDisplay(
            coinList,
            topSection,
            favorites,
            filteredCoins,
          ).map((coinKey, index) => (
            <CoinTile key={index} topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  )
}
