import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Calendar from './Calendar'

import calendars from '../../data/calendars'

const CalendarTemplate = () => {
    return (
        <FlatList 
            horizontal={true}
            data={calendars}
            keyExtractor={(item, index) => index.toString()}
            renderItem={((item, index) => (
                <Calendar calendar={item} />
            ))}
        />
    )
}

export default CalendarTemplate