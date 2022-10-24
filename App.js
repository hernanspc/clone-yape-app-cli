import { StyleSheet, Text, View } from 'react-native'
import React, { Appearance, AppState, useColorScheme } from 'react-native';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './src/app/store';
import { useEffect, useState } from 'react';
import { setDarkTheme, setLightTheme } from './src/features/theme';
import AuthScreen from './src/pages/Auth'
import Root from './src/navigation/Root';

export default function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        (Appearance?.getColorScheme() === 'light')
          ?
          dispatch(
            setLightTheme()
          )
          :
          dispatch(
            setDarkTheme()
          )

      }
      console.log('AppState change: ', status)
    })
  }, [])

  return user?.email ? (
    <Root user={user} />
  ) : (
    <AuthScreen />
  );
}


const styles = StyleSheet.create({})