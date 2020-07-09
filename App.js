import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Provider } from 'mobx-react'
import MainStore from './src/stores/main';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import AppLayout from './src/components/base/AppLayout'
import AppNavigation from './src/navigations/AppNavigation'

const mainStore = new MainStore()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={mainStore}>
          <StatusBar barStyle="dark-content" />
          <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
};


export default App;
