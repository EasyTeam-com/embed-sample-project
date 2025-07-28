import { EmployeeData } from "@easyteam/core-ui";
import { Settings } from "@easyteam/ui";
import { useCallback } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const onSave = useCallback(
    ({
      employees,
      isGlobalTrackingEnabled,
    }: {
      employees: EmployeeData[] | undefined;
      isGlobalTrackingEnabled: boolean;
    }) => {
      console.log("onSave", { employees, isGlobalTrackingEnabled });
    },
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <Settings
        onSave={onSave}
        geolocation={true}
        onEvent={(event) => console.log(event)}
        showGlobalTimeTracking={true}
        showNotificationSettings={true}
        showBreakSettings={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
