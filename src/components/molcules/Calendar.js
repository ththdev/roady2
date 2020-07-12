import React from 'react'
import styled from 'styled-components/native'
import calendars from '../../data/calendars'

import Event from '../atom/Event'

const Calendar = ({ date }) => {
    return calendars.map((item, index) => (
        <Event calendar={item} date={date} key={index.toString()} />
    ))
}

export default Calendar