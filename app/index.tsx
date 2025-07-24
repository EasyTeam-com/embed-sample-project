import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

// Test import from local UI library
// Uncomment the line below to test if the library is properly linked
// import { Button } from "@easyteam/ui";

import ComponentButton from "@/components/ComponentButton";
import { HeaderImage } from "@/components/HeaderImage";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function Home() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#f0f0f0", dark: "#f0f0f0" }}
      headerImage={<HeaderImage />}
    >
      <View style={styles.row}>
        <ComponentButton
          name="Agenda"
          description="Manage schedules, open shifts, time offs, etc."
          icon="calendar"
          onPress={() => router.push("/Agenda")}
        />
        <ComponentButton
          name="Calendar Sync"
          description="Sync your calendar with your selected provider."
          icon="sync"
          onPress={() => {}}
        />
      </View>
      <View style={styles.row}>
        <ComponentButton
          name="Clock"
          description="Clock in and out, take breaks, add shift notes."
          icon="timer"
          onPress={() => router.push("/Clock")}
        />
        <ComponentButton
          name="Timesheet"
          description="Manage employee shifts and notes."
          icon="person"
          onPress={() => {}}
        />
      </View>
      <View style={styles.row}>
        <ComponentButton
          name="Timesheets"
          description="View list of employees and their timesheets."
          icon="people"
          onPress={() => {}}
        />
        <ComponentButton
          name="Settings"
          description="Manage your settings for geolocation, breaks, etc."
          icon="cog"
          onPress={() => {}}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
  },
});
