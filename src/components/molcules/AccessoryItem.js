import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const AccessoryItem = ({ text, handler }) => {
    return (
        <TouchableOpacity onPress={handler}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const Text = styled.Text`
    font-size: 16px;
    color: #fff;
`

export default AccessoryItem