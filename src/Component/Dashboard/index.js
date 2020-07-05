import React from 'react'
import styled from 'styled-components'
import Page from '../Shared/Page'
import PriceGrid from './PricesGrid'
import CoinSpolight from './CoinSpotlight'
import PriceChart from './PriceChart'

const ChartGrid = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 3fr;
`

const Dashboard = () => {
  return (
    <Page name={'dashboard'}>
      <PriceGrid />
      <ChartGrid>
        <CoinSpolight />
        <PriceChart />
      </ChartGrid>
    </Page>
  )
}

export default Dashboard
