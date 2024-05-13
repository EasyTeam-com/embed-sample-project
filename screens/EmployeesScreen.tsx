import React from "react";
import { EmployeesTimesheet } from "@easyteam/ui";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type EmployeesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Employees">;

interface EmployeesScreenProps {
  navigation: EmployeesScreenNavigationProp;
}

export function EmployeesScreen({ navigation }: EmployeesScreenProps) {
  return (
    <EmployeesTimesheet onEmployeeReportPress={(employeeId) => navigation.navigate("Timesheet", { employeeId })} />
  );
}
