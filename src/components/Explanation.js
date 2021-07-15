import React from "react"
import styled from "styled-components"

const StyledExplanation = styled.div`
p {
    color: white;
    width: auto;
    padding: 2% 10% 2% 10%;
    line-height: 2;
}
`

export default function Explanation({explanation}){
    return (
        <StyledExplanation>
            <p>{explanation}</p>
        </StyledExplanation>
    )
}