import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './routes';
import React from 'react';

export function Routes() {

  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray02 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}