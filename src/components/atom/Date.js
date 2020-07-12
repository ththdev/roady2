import React from 'react'
import styled from 'styled-components/native'

import Cell from './Cell'

const Date = ({ date }) => {
    return (
        <Cell color="#f2f2f2">
            <Text>{date.format('DD')}</Text>
        </Cell>
    )
}

const Text = styled.Text`
    font-size: 16px;
`

export default Date