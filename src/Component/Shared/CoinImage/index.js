import React from 'react'

export default function ({coin, style}) {
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || {height: '5rem'}}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  )
}
