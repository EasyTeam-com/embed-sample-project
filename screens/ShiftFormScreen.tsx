import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ShiftForm, ShiftFormRef } from "@easyteam/ui";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Alert, Platform } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const dateFormatOptions = { weekday: "short", month: "short", day: "numeric" } as const;

export type ShiftFormScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Shift Form">;

export function ShiftFormScreen({ navigation, route }: ShiftFormScreenNavigationProp) {
  const { employeeId, date } = route.params;
  const ref = useRef<ShiftFormRef>(null);

  useLayoutEffect(() => {
    // Modify the screen title and add a cancel button to the header
    const screenTitle = date ? new Date(date).toLocaleString("en-US", dateFormatOptions) : "Add Shift";

    const headerLeft = Platform.select({
      // eslint-disable-next-line react/no-unstable-nested-components
      ios: () => <HeaderBackButton tintColor="#ff3479" onPress={() => navigation.goBack()} />,
      default: undefined,
    });

    navigation.setOptions({
      title: screenTitle,
      headerLeft,
    });
  }, [navigation, date]);

  useEffect(() => {
    const preventGoingBack = (e) => {
      if (!ref.current?.unsavedChanges) {
        // If we don't have unsaved changes, then we don't need to do anything
        return;
      }

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert("Unsaved Changes", "Are you sure you want to discard the changes?", [
        { text: "Cancel", style: "cancel", onPress: () => {} },
        {
          text: "Yes",
          style: "destructive",
          // If the user confirmed, then we dispatch the action we blocked earlier
          // This will continue the action that had triggered the removal of the screen
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    };

    const unsubscribe = navigation.addListener("beforeRemove", preventGoingBack);

    return unsubscribe;
  }, [navigation, ref]);

  return (
    <ShiftForm
      ref={ref}
      employeeId={route.params.employeeId}
      shiftDate={route.params.date}
      onSaveSuccess={() => navigation.goBack()}
      onCancelPress={() => navigation.goBack()}
    />
  );
}
