import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../containers/MainContainer'
import AddEvent from '../screens/AddEventModal'

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="AddEvent" component={AddEvent} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation