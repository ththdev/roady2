import React from 'react'
import moment from 'moment'
import styled from 'styled-components/native'

const Marker = ({ t1, t2 }) => {
    var d = 1
    if (!t2) {
        d = 1
    } else {
        d = moment.duration(t2.diff(t1)).asDays();
    }

    return (
        <MarkerView d={d} />
    )
}

const MarkerView = styled.View`
    width: ${props => props.theme.cellSize + "px"};
    height: ${props => props.theme.cellSize * props.d + "px"};
    background: #FDC105;
    border-radius: 999px;
    position: absolute;
    top: 0;
`

export default Marker