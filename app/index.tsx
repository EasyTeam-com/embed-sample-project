import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

import ComponentButton from "@/components/ComponentButton";
import { HeaderImage } from "@/components/HeaderImage";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import dayjs from "dayjs";

export default function Home() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#f0f0f0", dark: "#f0f0f0" }}
      headerImage={<HeaderImage />}
    >
      <View style={styles.row}>
        <ComponentButton
          name="Clock"
          description="Clock in and out, take breaks, add shift notes."
          icon="timer"
          onPress={() => router.push("/Clock")}
        />
        <ComponentButton
          name="Agenda"
          description="Manage schedules, open shifts, time offs, etc."
          icon="calendar"
          onPress={() => router.push("/Agenda")}
        />
        {/* <ComponentButton
          name="Calendar Sync"
          description="Sync your calendar with your selected provider."
          icon="sync"
          onPress={() => router.push("/CalendarSync")}
        /> */}
      </View>
      <View style={styles.row}>
        <ComponentButton
          name="Employees"
          description="View list of employees and their timesheets."
          icon="people"
          onPress={() => router.push("/Employees")}
        />
        <ComponentButton
          name="Timesheet"
          description="Manage employee shifts and notes."
          icon="person"
          onPress={() =>
            router.push({
              pathname: "/Timesheet",
              params: {
                employeeId: "external-employee-organization-admin",
                startDate: dayjs().startOf("week").subtract(1, "day").format(),
                endDate: dayjs().endOf("week").subtract(1, "day").format(),
              },
            })
          }
        />
      </View>
      <View style={styles.row}>
        <ComponentButton
          name="Settings"
          description="Manage your settings for geolocation, breaks, etc."
          icon="cog"
          onPress={() => router.push("/Settings")}
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
