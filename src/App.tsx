import React from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts } from "expo-font";


import { THEME } from './styles/theme';
import { Loading } from './components/Loading';

import { Auth } from './screens/Auth';
import { Home } from './screens/Home';
import { Register } from './screens/Register';


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

      {fontsLoaded ? <Register /> : <Loading />}
    </NativeBaseProvider>
  );

}
