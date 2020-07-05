import React from 'react'
import {AppContext} from '../../../Provider/AppProvider'
import styled from 'styled-components'

import PriceTile from '../PriceTile'

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 1.5rem;
  margin-top: 4rem;

  @media (min-width: 75em) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export default function () {
  return (
    <AppContext.Consumer>
      {({prices}) => (
        <PriceGrid>
          {prices.map((price, index) => (
            <PriceTile key={index} index={index} price={price} />
          ))}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  )
}
