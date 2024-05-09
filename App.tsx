import React from "react";
import { EasyTeamProvider } from "@easyteam/ui";
import { AUTH_TOKEN } from "@env";

const employeesData = []; // fill this with your employees data

function App(): React.JSX.Element {
  return (
    <EasyTeamProvider token={AUTH_TOKEN} employees={employeesData}>
      <Navigation />
    </EasyTeamProvider>
  );
}

export default App;

/**
 * Navigation setup
 */
import { NavigationContainer } from "@react-navigation/native";
import { DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { ClockScreen } from "./screens/ClockScreen";
import { TimesheetScreen } from "./screens/TImesheetScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Clock: undefined;
  Timesheet: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "EasyTeam UI" }} />
        <Stack.Screen name="Clock" component={ClockScreen} />
        <Stack.Screen name="Timesheet" component={TimesheetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
