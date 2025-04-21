import React from 'react';
import LogScreen from './log';
import { View } from 'react-native';

export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <LogScreen />
    </View>
  );
}
