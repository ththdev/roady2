import React, { useState, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage'
import CellRow from './CellRow'
import moment from 'moment'

const CellRenderer = () => {
    const [dates, setDates] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    getItems = async () => {
        const data = await AsyncStorage.getItem('dates');
        setDates(JSON.parse(data));
    }
    
    return (
        <CellContainer 
            data={dates}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <CellRow date={item.date} events={item.events} />
            )}
        />
    )
}

const CellContainer = styled(FlatList)`
    width: 100%;

`

export default CellRenderer