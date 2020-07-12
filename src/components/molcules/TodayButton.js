import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'
import useStores from '../../lib/hooks/useStores'
import { observer } from 'mobx-react'
import dates from '../../data/dates'

// components
import AccessoryItem from './AccessoryItem'

const TodayButton = observer(() => {
    const { store } = useStores();
    const { roadRendererRef } = store;
    const todayIndex = dates.findIndex(e => e.isSame(moment(), 'days'));
    
    function onPressHandler() {
        roadRendererRef.scrollToIndex({ animated: true, index: todayIndex - 5 });
    }

    return (
        <AccessoryItem text="today" handler={onPressHandler} />
    )
});

export default TodayButton