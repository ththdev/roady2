import React, { useState } from 'react'
import { TouchableWithoutFeedback, Vibration, Pressable } from 'react-native'
import styled from 'styled-components/native'
import { inject, observer } from 'mobx-react'
import calendars from '../data/calendars'
import { useNavigation } from '@react-navigation/native'
import AddEventModal from '../screens/AddEventModal'

const Empty = props => {
    const [active, setActive] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    handleOnPressIn = () => {
        setActive(true)
        setModalVisible(true)
    }

    handleOnPressOut = () => {
        setActive(false)
    }

    return (
        <>
            <TouchableWithoutFeedback onLongPress={handleOnPressIn} onPressOut={handleOnPressOut}>
                <Container status={active} />
            </TouchableWithoutFeedback>
            <AddEventModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </>
    )
}

const Container = styled.View`
    width: ${props => props.theme.cellSize + "px"};
    height: ${props => props.theme.cellSize + "px"};
    background: ${props => props.status ? 'green' : 'yellow'};
    border-radius: ${props => props.theme.cellSize + "px"};
`

export default Empty