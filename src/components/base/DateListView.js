import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import DateCell from '../DateCell'
import moment from 'moment'
import dates from '../../data/dates'

const DateListView = () => {
    return (
        <Container>
            {dates.map((item, index) => {
                console.log(item.date)
                return <DateCell key={index} date={item.date} />
            })}
        </Container>
    )
}

const Container = styled.View`
    
`

export default DateListView