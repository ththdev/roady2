import React from 'react'
import styled from 'styled-components/native'

// hooks
import useFindEvents from '../../lib/hooks/useFindEvents'

// components
import Cell from '../atom/Cell'
import EmptyCell from '../molcules/EmptyCell'

const Event = ({ calendar, date }) => {
    const event = useFindEvents(calendar.events, date);
    
    return event
    ?   <Cell color={calendar.color} key={event.name} />
    :   <EmptyCell key={date.toString()} />
}

export default Event