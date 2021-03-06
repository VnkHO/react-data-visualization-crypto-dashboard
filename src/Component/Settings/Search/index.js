import React from 'react'
import styled from 'styled-components'

import {backgroundColor2, fontSize2} from '../../Shared/Styles'
import {AppContext} from '../../../Provider/AppProvider'
import _ from 'lodash'
import fuzzy from 'fuzzy'

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (min-width: 64em) {
    grid-template-columns: 20rem 1fr;
  }
`

const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  border: 1px solid;
  padding: 0.5rem;
  height: 2.5rem;
  color: #1163c9;
  place-self: center left;
`

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
  // Get All the coin symbols
  let coinSymbols = Object.keys(coinList)
  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map((sym) => coinList[sym].CoinName)
  let allStringsToSearch = coinSymbols.concat(coinNames)
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map((result) => result.string)
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    )
  })
  setFilterCoins(filteredCoins)
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value
  if (!inputValue) {
    setFilteredCoins(null)
    return
  }
  handleFilter(inputValue, coinList, setFilteredCoins)
}

export default function () {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList, isDark}) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput
            isDark={isDark}
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  )
}
