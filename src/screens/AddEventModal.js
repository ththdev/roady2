import React, { useState } from 'react'
import { TouchableWithoutFeedback, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import useStores from '../lib/hooks/useStores'
import { observer } from 'mobx-react'

const { width, height } = Dimensions.get('window');

const AddEventModal = observer(() => {
    const {eventName, setEventName} = useState("")
    const { addEventModal, setAddEventModal } = useStores()

    return (
        <CustomModal 
            isVisible={addEventModal} 
            deviceHeight={height} 
            deviceWidth={width}
            style={{ justifyContent: "flex-end" }}
        >
            <TouchableWithoutFeedback onPress={() => setAddEventModal(false)}>
                <CloseOverlay />
            </TouchableWithoutFeedback>
            <Container>
                <NameInput 
                    value={eventName} 
                    placeholder="Event Name" 
                    onChangeText={txt => setEventName(txt)} 
                />
            </Container>
        </CustomModal>
    )
});

const Container = styled.View`
    width: 100%;
    height: 500px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;
`
const CloseOverlay = styled.View`
    flex: 1;
`
const NameInput = styled.TextInput`
    font-size: 18px;
`

const CustomModal = styled(Modal)`
    margin: 0;    
`

export default AddEventModal