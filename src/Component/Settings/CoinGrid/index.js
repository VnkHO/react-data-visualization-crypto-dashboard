import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../../../Provider/AppProvider'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`
export default function () {
  return (
    <AppContext.Consumer>
      {({coinList}) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((coinKey) => (
            <div>{coinKey}</div>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  )
}
