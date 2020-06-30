import React from 'react'
import styled from 'styled-components'

const TodayLine = () => {
    return (
        <Container>
            <Circle />
            <Line />
            <Circle />
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
`

const Circle = styled.View`
    width: 8px;
    height: 8px;
    border-radius: ${8/2 + "px"};
    background: red;
`

const Line = styled.View`
    width: 100%;
    height: 1px;
    background: red;
    position: absolute;
    top: 50%;
`

export default TodayLine