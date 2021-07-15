import React from "react"
import styled from "styled-components"

const StyledDate = styled.h2`
  color: #9E9EA3;
`

export default function Date({date}) {
    return <StyledDate className='date'>{date}</StyledDate>
}