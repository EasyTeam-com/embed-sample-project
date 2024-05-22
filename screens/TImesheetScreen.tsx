import React, { useLayoutEffect, useRef } from "react";
import { AddButton, Timesheet, TimesheetRef } from "@easyteam/ui";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type ShiftFormScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Timesheet">;

export function TimesheetScreen({ navigation, route }: ShiftFormScreenNavigationProp) {
  const ref = useRef<TimesheetRef>(null);

  // In case we want to set the employeeId from the route params
  // If undefined, it'll show the shifts for the signed in user
  const employeeId = route.params?.employeeId!;

  useLayoutEffect(() => {
    // Allow the user to add a new shift if they have write permissions
    if (ref.current?.adminWritePermissions) {
      // Add a button to the header to add a new shift
      navigation.setOptions({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <AddButton
            onPress={() =>
              navigation.navigate("Shift Form", {
                employeeId: ref.current!.selectedEmployeeId,
              })
            }
          />
        ),
      });

      // Reload the data when the screen is focused
      const unsubscribe = navigation.addListener("focus", () => {
        ref.current?.reloadData();
      });

      return unsubscribe;
    }
  }, [navigation]);

  return (
    <Timesheet
      ref={ref}
      employeeId={employeeId}
      onEditPress={(date: string, selectedEmployeeId: string) =>
        navigation.navigate("Shift Form", {
          date,
          employeeId: selectedEmployeeId,
        })
      }
    />
  );
}
