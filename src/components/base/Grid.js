import React from 'react'
import styled from 'styled-components/native'
import dates from '../../data/dates'
import moment from 'moment'

const Grid = () => {
    return dates.map((item, index) => {
        console.log(item.date);
        <Line index={index} key={index.toString()} />
    })
    
}

const Line = styled.View`
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.gray};
    position: absolute;
    top: ${props => 35 / 2 + 35 * props.index + "px"};
    z-index: -1;
`

export default Grid