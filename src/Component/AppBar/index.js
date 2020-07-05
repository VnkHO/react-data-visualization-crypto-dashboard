import React from 'react'
import styled, {css} from 'styled-components'

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 4rem;
  grid-template-columns: 10rem auto 10rem 10rem;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 6rem #03ff03;
    `}
`

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1)
}

function ControlButton({name, active}) {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  )
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash </Logo>
      <div />
      <ControlButton active name={'dashboard'} />
      <ControlButton name={'settings'} />
    </Bar>
  )
}
