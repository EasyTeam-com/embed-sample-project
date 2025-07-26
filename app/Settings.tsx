import { Settings } from '@easyteam/ui';
// import { useEmployees } from '../providers/EmployeesContext.tsx';
import { SafeAreaView, ViewStyle } from 'react-native';

const viewStyle: ViewStyle = { flex: 1 };

export default function SettingsScreen() {
  // const { setEmployees, setIsGlobalTimeTrackingEnabled } = useEmployees();

  return (
    <SafeAreaView style={viewStyle}>
      <Settings
        onSave={({ employees, isGlobalTrackingEnabled }) => {
          console.log(
            'onSave: isGlobalTrackingEnabled',
            isGlobalTrackingEnabled,
          );
          // setEmployees?.(employees);
          // setIsGlobalTimeTrackingEnabled?.(isGlobalTrackingEnabled);
        }}
        geolocation={true}
        onEvent={event => console.log(event)}
        showGlobalTimeTracking={true}
        showNotificationSettings={true}
        showBreakSettings={true}
      />
    </SafeAreaView>
  );
}
