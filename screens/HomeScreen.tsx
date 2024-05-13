import React from "react";
import { View, Button, ViewStyle } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const WRAPPER: ViewStyle = { paddingTop: 12, gap: 12, paddingHorizontal: 12 };

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={WRAPPER}>
      <Button title="Clock" onPress={() => navigation.navigate("Clock")} />
      <Button title="Timesheet - Employee View" onPress={() => navigation.navigate("Timesheet")} />
      <Button title="Admin - Employees List" onPress={() => navigation.navigate("Employees")} />
    </View>
  );
}
