import React from 'react';
import { View, Button, ViewStyle } from 'react-native';
import { HomeScreenNavigationProp } from '../App';

const WRAPPER: ViewStyle = { paddingTop: 12, gap: 12, paddingHorizontal: 12 };

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={WRAPPER}>
      <Button title="Clock" onPress={() => navigation.navigate('Clock')} />
      <Button title="Timesheet - Employee View" onPress={() => navigation.navigate('Timesheet')} />
    </View>
  );
}
