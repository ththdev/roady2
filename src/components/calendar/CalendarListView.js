import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import calendars from '../../data/calendars'
import Calendar from './Calendar'

const CalendarListView = () => {
    return (
        <Container
            horizontal={true}
            data={calendars}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return <Calendar color={item.color} />
            }}
        />
    )
}

const Container = styled(FlatList)`
    padding: 0 20px;
`

export default CalendarListView