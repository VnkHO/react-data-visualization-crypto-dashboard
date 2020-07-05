import React from 'react'

import styled, {css} from 'styled-components'

const CoinImage = styled.img`
  height: 5rem;
  ${(props) =>
    props.spotlight &&
    css`
      height: 20rem;
      display: block;
      margin: auto;
    `}
`

export default function ({coin, spotlight}) {
  return (
    <CoinImage
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  )
}
