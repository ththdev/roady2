import React, { useState } from 'react'
import { TouchableWithoutFeedback, Dimensions, KeyboardAvoidingView, TextInput } from 'react-native'
import styled from 'styled-components/native'
import Modal from 'react-native-modal'

const { width, height } = Dimensions.get('window');

const AddEventModal = ({ modalVisible, setModalVisible }) => {
    const {eventName, setEventName} = useState("")
    return (
        <CustomModal 
            isVisible={modalVisible} 
            deviceHeight={height} 
            deviceWidth={width}
            style={{ justifyContent: "flex-end" }}
        >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
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
}

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