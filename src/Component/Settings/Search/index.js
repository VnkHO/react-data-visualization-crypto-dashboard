import React from 'react'
import styled from 'styled-components'

import {backgroundColor2, fontSize2} from '../../Shared/Styles'

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
`

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border 1px solid;
  padding: 0.5rem;
  height: 2.5rem;
  color: #1163c9;
  place-self: center left;
`

export default function () {
  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <SearchInput />
    </SearchGrid>
  )
}
