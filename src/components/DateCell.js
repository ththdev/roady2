import React from 'react'
import styled from 'styled-components/native'

const DateCell = ({ date }) => {

    return (
        <Container>
            <CellText>{date}</CellText>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    width: 50px;
    height: ${props => props.theme.cellSize + "px"};
    justify-content: center;
    align-items: center;
    background: #fff;
`

const CellText = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.gray};
`

export default DateCell