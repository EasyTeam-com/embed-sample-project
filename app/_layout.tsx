import { Inter_500Medium } from "@expo-google-fonts/inter";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
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

  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiZXh0ZXJuYWwtZW1wbG95ZWUtb3JnYW5pemF0aW9uLWFkbWluIiwibG9jYXRpb25JZCI6ImV4dGVybmFsLWxvY2F0aW9uLWlkLTEiLCJvcmdhbml6YXRpb25JZCI6ImV4dGVybmFsLW9yZ2FuaXphdGlvbi1pZC0xIiwicGFydG5lcklkIjoiOGE2MmIzNDQtMWYzZS00ODMxLWI4NjctYjU0MjhlNDE5NGZjIiwiYWNjZXNzUm9sZSI6eyJuYW1lIjoib3JnLWFkbWluIiwicGVybWlzc2lvbnMiOlsiTE9DQVRJT05fUkVBRCIsIkxPQ0FUSU9OX0FETUlOIiwiU0hJRlRfUkVBRCIsIlNISUZUX1dSSVRFIiwiU0NIRURVTEVfUkVBRCIsIlNDSEVEVUxFX1dSSVRFIiwiT1JHQU5JWkFUSU9OX0FETUlOIiwiTE9DQVRJT05fQURNSU4iXX0sInJvbGUiOnsibmFtZSI6InVzZXItYWRtaW4ifSwiZmVhdHVyZXMiOnsiZ2VvbG9jYXRpb24iOmZhbHNlLCJzaGlmdE5vdGVzIjp0cnVlfSwiaWF0IjoxNzQ3NTY4NzIwfQ.lBbDRKBGToKwZlFyWV99XFdHZdYP-P5NYjh0GozdufXcOAoEfnd7VP5LULHEB-8FENYSMp2AQD-QqWV6J2vG0BQdwgiEIBWw7_k3jD0ydMovDxfONbl5V_-6dghrRa6XF3WWuDMw7JZd7RitE2Ab3K7-CHYVvgMdrzbjXRcLeMufMeNC-t5mEbp6C8t2fZkDYeeCBWG1BrhB34wlNaI6khOSoKIVn992igm8B95c6q32RcbXkSu0j0j5b_NxJ8yZcz_9hBl9sARSgZ9WSZqSG-oL3thP2-YoTK7k89ZTpQTnEEYX6lXo1tt40fwhZICa9xAPChzH-gzUCSljeqexIUsiRPtuI7-kA2KvKb2ciudd2_lMUp-upR-XzWi0-J3pLE_aB4Q0CZ9-2y1Hk0UfaRLXBL2wdd9JYdvUgIV3apeLrBLe6U5pfHcov8fon-ewYMrfA1PgCtYGRjFeL0L7w90Ctp784YwWOS0xZi3u0isbNVTYCSOBfRpW3rlWbKwtlm6_bKjGN5rq5tO4MTjr23n8pRXW9Gr9jFcoIdUVpl4UWYp_FGdv-SkvTfaXAyV8bNPIzPQeRE92ob64KovmR_RzvnMwUVoHgzwYNkn3YRY2o_JlGdhcHQY78VmO-XlA3BSbWLS5mPJE7vBkkFrWMTkegPmK9m2wXeKzsVaz7-g";

  const organization: Organization = {
    id: "external-organization-id-1",
    name: "Organization 1",
  };

  return (
    <EasyTeamProvider
      token={token}
      theme={theme}
      employees={users}
      locations={locations}
      roles={roles}
      organization={organization}
      basePath="http://192.168.1.11:3000"
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Clock" options={{ title: "Clock In/Out" }} />
          <Stack.Screen name="ShiftNotes" options={{ title: "Shift Notes" }} />
          <Stack.Screen name="Agenda" options={{ title: "Agenda" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </EasyTeamProvider>
  );
}
