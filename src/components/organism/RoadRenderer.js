import React, { useEffect, useRef } from 'react'
import moment from 'moment'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import dates from '../../data/dates'
import useStores from '../../lib/hooks/useStores'
import { observer } from 'mobx-react'

// components
import Date from '../atom/Date'
import GridLine from '../atom/GridLine'
import Calendar from '../molcules/Calendar'

const RoadRenderer = observer(() => {
    const flatListRef = useRef(null);
    const { store } = useStores()
    const { initRoadRenderer, cellSize } = store

    const todayIndex = dates.findIndex(e => e.isSame(moment(), 'days'));

    useEffect(() => {
        if(flatListRef.current) {
            initRoadRenderer(flatListRef.current);
        }
    }, [])

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={dates}
            keyExtractor={(item, index) => index.toString()}
            renderItem={((item, index) => (
                <Row>
                    <Date date={item.item} />
                    <Calendar date={item.item} />
                    <Date date={item.item} />
                    <GridLine date={item.item} />
                </Row>
            ))}
            ref={flatListRef}
            onScrollToIndexFailed={() => null}
            pagingEnabled={false}
            onContentSizeChange={() => {
                flatListRef.current.scrollToIndex({ animated: true, index: todayIndex - 5 })
            }}
            getItemLayout={(item, index) => ({
                length: cellSize, offset: cellSize * index, index
            })}
        />
    )
})

const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export default RoadRenderer