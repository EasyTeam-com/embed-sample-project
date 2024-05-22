import React, { useLayoutEffect, useRef } from "react";
import { EmployeeListRef, EmployeesTimesheet } from "@easyteam/ui";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type EmployeesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Employees">;

interface EmployeesScreenProps {
  navigation: EmployeesScreenNavigationProp;
}

export function EmployeesScreen({ navigation }: EmployeesScreenProps) {
  const ref = useRef<EmployeeListRef>(null);

  useLayoutEffect(() => {
    // Reload the report data when the screen is focused
    const unsubscribe = navigation.addListener("focus", () => {
      ref.current?.reloadData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <EmployeesTimesheet onEmployeeReportPress={(employeeId) => navigation.navigate("Timesheet", { employeeId })} />
  );
}
