import { StyleSheet, Text, View } from 'react-native'
import React, { Appearance, AppState, useColorScheme } from 'react-native';
import { Provider } from "react-redux";
import { store } from './src/app/store';
import { useEffect } from 'react';

export default function Wrapper() {

  useEffect(() => {

    AppState.addEventListener('change', (status) => {
      console.log('AppState change: ', status)

    })
  }, [])

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}


const styles = StyleSheet.create({})