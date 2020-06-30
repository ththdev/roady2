import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'
import CellRenderer from './src/components/CellRenderer'

const App = () => {
  useEffect(() => {
    // initialize dates
    async function initialize() {
      const data = []
      for(var i=0; i < 30; i++) {
        data.push({
          date: moment().add(i, 'days').format('D')
        })
      }
      await AsyncStorage.setItem('dates', JSON.stringify(data));
    }

    initialize()
  }, [])

  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CellRenderer />
      </SafeAreaView>
    </>
  );
};


export default App;
