import { SHIFT_FORM_MODES, Timesheet, TimesheetRef } from '@easyteam/ui';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { StyleSheet } from 'react-native';

export default function TimesheetScreen() {
  const ref = useRef<TimesheetRef>(null);
  const router = useRouter();
  const params = useLocalSearchParams();

  const employeeId = Array.isArray(params?.employeeId) ? params.employeeId[0] : params?.employeeId;
  const pStartDate = Array.isArray(params?.startDate) ? params.startDate[0] : params?.startDate;
  const pEndDate = Array.isArray(params?.endDate) ? params.endDate[0] : params?.endDate;

  const [startDate, setStartDate] = useState<string | undefined>(pStartDate);
  const [endDate, setEndDate] = useState<string | undefined>(pEndDate);

  useEffect(() => {
    setStartDate(pStartDate);
    setEndDate(pEndDate);
  }, [pStartDate, pEndDate]);

  const handleBack = useCallback(() => {
    if (ref.current) {
      // Navigate back to the previous screen
      router.back();
    }
  }, [router]);

  const handleAddShift = useCallback(() => {
    if (ref.current) {
      router.push({
        pathname: "/ShiftForm",
        params: {
          employeeId: ref.current.selectedEmployeeId,
          date: startDate,
          mode: SHIFT_FORM_MODES.ADD,
        }
      });
    }
  }, [router, startDate]);

  useLayoutEffect(() => {
    // Note: In Expo Router, header options are typically set in the _layout.tsx file
    // This useLayoutEffect is kept for compatibility but may not work as expected
    // You may need to configure the header in the _layout.tsx file instead
  }, [handleBack, startDate]);

  useEffect(() => {
    // Reload data when the screen comes into focus
    // In Expo Router, you might want to use router.isFocused() or similar
    ref.current?.reloadData();
  }, []);

  return (
    <Timesheet
      ref={ref}
      employeeId={employeeId}
      startDate={startDate}
      endDate={endDate}
      onEditPress={(date: string, selectedEmployeeId: string) => {
        console.log('TimesheetScreen, edit press', date);
        router.push({
          pathname: "/ShiftForm",
          params: {
            date,
            employeeId: selectedEmployeeId,
            mode: SHIFT_FORM_MODES.EDIT,
          }
        });
      }}
      onEvent={event => console.log('Timesheet event:', event)}
      onDateRangeChange={(newStartDate: string, newEndDate: string) => {
        console.log(
          'onDateRangeChange log => startDate: ',
          newStartDate,
          'endDate: ',
          newEndDate,
        );
        setStartDate(newStartDate);
        setEndDate(newEndDate);
      }}
    />
  );
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 6,
  },
});
