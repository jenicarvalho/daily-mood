import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import React from 'react';

import Home from '@screens/Home';
import { Text } from 'react-native';
import theme from './src/theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function App() {

  const [loaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="auto"
        backgroundColor="transparent"
        translucent
      />
      {loaded ? <Home /> : <Text>Loading...</Text>}
    </ThemeProvider>
  );
}
