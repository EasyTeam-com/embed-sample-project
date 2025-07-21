import { EmployeeData } from "@easyteam/core-ui";

export const users: EmployeeData[] = [
  {
    id: "external-employee-organization-admin",
    name: "User Organization Admin",
    role: "user-admin",
    wageType: "hourly",
    wage: 40,
    features: {
      geolocation: true,
      shiftNotes: true,
    },
  },
  {
    name: "User Location Admin",
    id: "external-employee-location-admin",
    role: "user-location-admin",
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    wageType: "hourly",
    wage: 30,
  },
  {
    name: "User Manager Write",
    id: "external-employee-manager-write",
    role: "user-manager-write",
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    wageType: "hourly",
    wage: 20,
  },
  {
    name: "User Manager Standard",
    id: "external-employee-manager-standard",
    role: "user-manager-standard",
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    wageType: "weekly",
    wage: 300,
  },
  {
    name: "User Read only",
    id: "external-employee-id-read-only",
    role: "readonly",
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    wageType: "weekly",
    wage: 300,
  },
  {
    name: "User Read only Long long long long name extra text qa",
    id: "external-employee-id-read-only-long-name",
    role: "readonly",
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    wageType: "weekly",
    wage: 200,
  },
];
