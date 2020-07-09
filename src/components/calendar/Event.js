import React, { useState } from 'react'
import styled from 'styled-components/native'
import Empty from '../Empty'

const Event = props => {
    const date = props.date
    var status = ""
    const [events, setEvents] = useState(props.events)

    for (var i = 0; i < events.length; i++) {
        const event = events[i]
        
        if (date.isBetween(event.startDate, event.endDate, 'days', '[]')) {
            status = "have"
        }
    }
    switch (status) {
        case 'have':
            return <Box><BoxText>{date.format('D')}</BoxText></Box>
        default: 
            return <Empty date={date} events={events} setEvents={setEvents} />
    }
}

const Container = styled.View``

const Box = styled.View`
    width: ${props => props.theme.cellSize + "px"};
    height: ${props => props.theme.cellSize + "px"};
    background: green;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.cellSize / 2 + "px"};
`

const BoxText = styled.Text`
    font-size: 10px;
`

export default Event