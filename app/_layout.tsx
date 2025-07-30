import { Inter_500Medium } from "@expo-google-fonts/inter";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { locations } from "@/configs/locations";
import { roles } from "@/configs/roles";
import { users } from "@/configs/users";
import { useColorScheme } from "@/hooks/useColorScheme";
import { theme } from "@/theme/theme";
import { Organization } from "@easyteam/core-ui";
import { EasyTeamProvider } from "@easyteam/ui";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: Inter_500Medium,
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const token = Constants.expoConfig?.extra?.token;

  const organization: Organization = {
    id: "external-organization-id-1",
    name: "Organization 1",
  };

  const apiBasePath =
    Constants.expoConfig?.extra?.apiBasePath ||
    "https://www.easyteam.io/sandbox/embed";

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <EasyTeamProvider
        token={token}
        theme={theme}
        employees={users}
        locations={locations}
        roles={roles}
        organization={organization}
        basePath={apiBasePath}
      >
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="Clock"
              options={{ title: "Clock In/Out", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="ShiftNotes" options={{ title: "Shift Notes" }} />
            <Stack.Screen
              name="Agenda"
              options={{ title: "Agenda", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="Timesheet" />
            <Stack.Screen
              name="Employees"
              options={{ title: "Employees", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="ShiftForm" />
            <Stack.Screen
              name="Settings"
              options={{ title: "Settings", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </EasyTeamProvider>
    </GestureHandlerRootView>
  );
}
