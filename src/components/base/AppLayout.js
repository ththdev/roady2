import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Header from './Header'
import { inject, observer } from 'mobx-react'

import CalendarTemplate from '../calendar/CalendarTemplate'
import GridTemplate from './GridTemplate'

@inject('store')
@observer
class AppLayout extends React.Component {
    render() {
        
        return (
            <AppContainer>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={!this.props.store.drawable}
                >
                    <Header />
                    <GridTemplate />
                    <DataContainer>
                        <CalendarTemplate />
                    </DataContainer>
                </ScrollView>
            </AppContainer>
        )
    }
}

const AppContainer = styled.View`
    width: 100%;
    padding: 0 20px;
`

const DataContainer = styled.View`
    padding: 0 50px;
`

export default AppLayout