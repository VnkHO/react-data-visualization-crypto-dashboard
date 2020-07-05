import React from 'react'
import {AppContext} from '../../../Provider/AppProvider'
import styled from 'styled-components'
import App from '../../App/App'

import PriceTile from '../PriceTile'

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); */
  grid-gap: 1.5rem;
  margin-top: 4rem;
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
