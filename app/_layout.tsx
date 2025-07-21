import {
  Inter_500Medium
} from "@expo-google-fonts/inter";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { users } from "@/configs/users";
import { useColorScheme } from "@/hooks/useColorScheme";
import { theme } from "@/theme/theme";
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

  const token = "";

  return (
    <EasyTeamProvider
      token={token}
      theme={theme}
      employees={users}
      basePath="http://192.168.1.10:3000"
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </EasyTeamProvider>
  );
}
