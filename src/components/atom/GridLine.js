import React from 'react'
import moment from 'moment'
import styled from 'styled-components/native'

const GridLine = ({ date }) => {
    const isToday = date.isSame(moment(), 'days');
    return (
        <>
            <CircleLeft isToday={isToday} />
            <Line isToday={isToday} />  
            <CircleRight isToday={isToday} />  
        </>
    )
}

const Line = styled.View`
    width: 100%;
    height: ${props => props.isToday ? 2+"px" : 1+"px"};
    background: ${props => props.isToday ? 'red' : '#c4c4c4'};
    position: absolute;
    top: 50%;
    z-index: -1;
`
const Circle = styled.View`
    width: 10px;
    height: 10px;
    border-radius: ${10/2 + "px"};
    background: ${props => props.isToday ? "red" : "transparent"};
    position: absolute;
    top: 40%;
`
const CircleLeft = styled(Circle)`
    left: ${props => props.theme.cellSize + "px"};
`

const CircleRight = styled(Circle)`
    right: ${props => props.theme.cellSize + "px"};
`
export default GridLine