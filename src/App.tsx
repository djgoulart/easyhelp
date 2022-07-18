import React from 'react';
import { NativeBaseProvider, Box, Center, StatusBar } from "native-base";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';


import { THEME } from './styles/theme';
import { Auth } from './Auth';
import { Loading } from './components/Loading';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Auth /> : <Loading />}
    </NativeBaseProvider>
  );

}
