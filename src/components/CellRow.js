import React from 'react'
import styled from 'styled-components/native'
import Cell from './Cell'
import DateCell from './DateCell'
import TodayLine from './TodayLine'
import moment from 'moment'

const CellRow = ({ date, event }) => {
    return (
        <Container>
            <DateCell date={date} />
            <CellContainer>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                { date === moment().format('D') ? <TodayLine /> : <GridLine /> }
            </CellContainer>
            <DateCell date={date} />
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
`

const CellContainer = styled.View`
    flex-direction: row;
    /* background: rgba(0,0,0,0.2); */
`

const GridLine = styled.View`
    width: 100%;
    height: 1px;
    background: lightgray;
    position: absolute;
    top: 50%;
`

export default CellRow