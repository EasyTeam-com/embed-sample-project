import React from 'react';
import { DarkTheme } from '@react-navigation/native';
import { AUTH_TOKEN } from '@env';
import { Clock, EasyTeamProvider } from '@easyteam/ui';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
// import { ClockScreen } from './screens/ClockScreen';
// import { TimesheetScreen } from './screens/TimesheetScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <EasyTeamProvider token={AUTH_TOKEN}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'EasyTeam UI' }} />
          {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'EasyTeam UI' }} />
          <Stack.Screen name="Clock" component={ClockScreen} />
          <Stack.Screen name="Timesheet" component={TimesheetScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </EasyTeamProvider>
  );
}

export default App;
