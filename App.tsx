import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import React from 'react';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {

  const [loaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="#fff"
      />
      {loaded ? <Routes /> : <Text>Loading...</Text>}
    </ThemeProvider>
  );
}
