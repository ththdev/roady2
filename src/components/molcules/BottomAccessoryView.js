import React from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components/native'

// components
import TodayButton from './TodayButton'

const { width } = Dimensions.get('window');

const AccessoryItem = ({ text }) => {
    return (
        <TouchableOpacity>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const BottomAccessoryView = () => {
    return (
        <Container>
            <AccessoryItem text="calendar" />
            <TodayButton />
        </Container>
    )
}

const Container = styled.View`
    width: ${width + "px"};
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    background: #151515;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 30px 30px 0 30px;
`

const Text = styled.Text`
    font-size: 16px;
    color: #fff;
`

export default BottomAccessoryView