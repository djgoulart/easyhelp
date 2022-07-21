import React from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts } from "expo-font";


import { THEME } from './styles/theme';
import { Loading } from './components/Loading';


import { Routes } from './routes';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });


  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <StatusBar
          barStyle='light-content'
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Routes /> : <Loading />}
      </NavigationContainer>
    </NativeBaseProvider>
  );

}
