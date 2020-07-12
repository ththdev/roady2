import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Header from '../molcules/Header'
import { inject, observer } from 'mobx-react'

// components
import RoadRenderer from './RoadRenderer'
import AddEventModal from '../../screens/AddEventModal'
import BottomAccessoryView from '../molcules/BottomAccessoryView'

@inject('store')
@observer
class AppLayout extends React.Component {
    render() {
        
        return (
            <AppContainer>
                <Header />
                <RoadRenderer />
                <BottomAccessoryView />
                <AddEventModal />
            </AppContainer>
        )
    }
}

const AppContainer = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 20px;
`

export default AppLayout