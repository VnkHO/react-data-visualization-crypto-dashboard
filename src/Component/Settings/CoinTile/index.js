import React from 'react'
import {AppContext} from '../../../Provider/AppProvider'
import {SelectableTile} from '../../Shared/Tile'
import CoinHeaderGrid from '../CoinHeaderGrid'
import CoinImage from '../../Shared/CoinImage'

export default function ({coinKey}) {
  return (
    <AppContext.Consumer>
      {({coinList}) => {
        let coin = coinList[coinKey]
        console.log('COIN: ', coin)
        const TileClass = SelectableTile
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        )
      }}
    </AppContext.Consumer>
  )
}
