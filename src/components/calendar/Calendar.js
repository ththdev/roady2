import React, { useState } from 'react'
import styled from 'styled-components/native'
import Event from './Event'

import dates from '../../data/dates'

const Calendar = props => {
    const { events } = props.calendar.item
    
    return (
        <Container>
            {dates.map((item, index) => (
                <Event key={index.toString()} events={events} date={item} />
            ))}
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    
`

export default Calendar