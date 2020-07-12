import React from 'react'
import Cell from '../atom/Cell'
import useStores from '../../lib/hooks/useStores'

const EmptyCell = () => {
    const { store } = useStores();
    const { addEventModal, setAddEventModal } = store;

    const handleOnPress = () => {
        setAddEventModal(true);
        console.log(addEventModal)
    }

    return (
        <Cell onPress={handleOnPress} />
    )
}

export default EmptyCell