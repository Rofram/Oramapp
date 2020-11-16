import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { RobotoSlab_400Regular, RobotoSlab_700Bold, useFonts } from '@expo-google-fonts/roboto-slab';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style='auto' />
        <Routes />
      </>
    );
  }

}

