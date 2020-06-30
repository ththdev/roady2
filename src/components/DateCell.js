import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window')
const cellWidth = width / 6


const DateCell = ({ date }) => {
    return (
        <Container>
            <CellText>{date}</CellText>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    width: ${cellWidth + "px"};
    height: ${cellWidth + "px"};
    /* border: 1px solid #000; */
    justify-content: center;
    align-items: center;
`

const CellText = styled.Text`
    font-size: 16px;
`

export default DateCell