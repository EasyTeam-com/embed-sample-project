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
          onPress={() => router.push({
            pathname: "/Timesheet",
            params: {
              employeeId: "external-employee-organization-admin",
              startDate: dayjs().startOf('week').subtract(1, 'day').format(),
              endDate: dayjs().endOf('week').subtract(1, 'day').format()
            }
          })}
        />
      </View>
      <View style={styles.row}>
        <ComponentButton
          name="Employees"
          description="View list of employees and their timesheets."
          icon="people"
          onPress={() => router.push("/Employees")}
        />
        <ComponentButton
          name="Settings"
          description="Manage your settings for geolocation, breaks, etc."
          icon="cog"
          onPress={() => router.push("/Settings")}
        />
      </View>
      <View style={styles.row}>
        <ComponentButton
          name="Add Shift"
          description="Create a new shift for an employee."
          icon="add"
          onPress={() => router.push({
            pathname: "/ShiftForm",
            params: {
              date: new Date().toISOString(),
              employeeId: "external-employee-organization-admin",
              mode: "ADD"
            }
          })}
        />
        <ComponentButton
          name="Edit Shift"
          description="Edit a shift for an employee."
          icon="add"
          onPress={() => router.push({
            pathname: "/ShiftForm",
            params: {
              date: new Date().toISOString(),
              employeeId: "external-employee-organization-admin",
              mode: "EDIT"
            }
          })}
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
