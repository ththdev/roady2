import React from 'react'
import styled from 'styled-components/native'

const Cell = styled.TouchableOpacity`
    width: ${props => props.theme.cellSize + "px"};
    height: ${props => props.theme.cellSize + "px"};
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color ? props.color : "transparent"};
`

export default Cell