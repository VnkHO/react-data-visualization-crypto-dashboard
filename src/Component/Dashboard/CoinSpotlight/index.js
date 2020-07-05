import React from 'react'
import styled from 'styled-components'
import {Tile} from '../../Shared/Tile'
import {AppContext} from '../../../Provider/AppProvider'
import CoinImage from '../../Shared/CoinImage'

const SpotlightName = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`

export default function () {
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList, isDark}) => (
        <Tile isDark={isDark}>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]} />
        </Tile>
      )}
    </AppContext.Consumer>
  )
}
