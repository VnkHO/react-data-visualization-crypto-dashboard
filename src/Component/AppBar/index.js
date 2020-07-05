import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../../Provider/AppProvider'

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 4rem;
  grid-template-columns: 8rem auto 8rem 8rem 8rem;
  & div {
    text-align: center;
    cursor: pointer;
  }
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 6rem #03ff03;
    `}
  ${(props) =>
    props.hidden &&
    css`
      display: none;
      visibility: hidden;
    `}
`

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1)
}

function ControlButton({name, active}) {
  return (
    <AppContext.Consumer>
      {({firstVisit, page, setPage}) => {
        return (
          <ControlButtonElem
            active={page === name}
            onClick={() => setPage(name)}
            hidden={firstVisit && name === 'dashboard'}
          >
            {toProperCase(name)}
          </ControlButtonElem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default function () {
  return (
    <AppContext.Consumer>
      {({isDark, setIsDark}) => (
        <Bar>
          <Logo>CryptoDash </Logo>
          <div />
          <ControlButton active name={'dashboard'} />
          <ControlButton name={'settings'} />
          {/* <div onClick={setIsDark}>{`${toProperCase(
            `${isDark ? 'dark' : 'light'}`,
          )} mode`}</div> */}
        </Bar>
      )}
    </AppContext.Consumer>
  )
}
