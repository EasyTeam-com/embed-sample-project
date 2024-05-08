import { View, Button } from 'react-native';

export function HomeScreen({ navigation }) {
  return (
    <View style={{ paddingTop: 12, gap: 12, paddingHorizontal: 12 }}>
      <Button title="Clock" onPress={() => navigation.navigate('Clock')} />
      <Button title="Timesheet - Employee View" onPress={() => navigation.navigate('Timesheet')} />
    </View>
  );
}
