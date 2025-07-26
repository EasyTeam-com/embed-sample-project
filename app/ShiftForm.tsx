import { SHIFT_FORM_MODES, ShiftForm, ShiftFormRef } from '@easyteam/ui';
import { HeaderBackButton } from '@react-navigation/elements';
import dayjs from 'dayjs';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert, Platform } from 'react-native';

export default function ShiftFormScreen() {
  const ref = useRef<ShiftFormRef>(null);
  const router = useRouter();
  const params = useLocalSearchParams();

  const [date, setDate] = useState(Array.isArray(params?.date) ? params.date[0] : params?.date);
  const employeeId = Array.isArray(params?.employeeId) ? params.employeeId[0] : params?.employeeId;
  const modeParam = Array.isArray(params?.mode) ? params.mode[0] : params?.mode;
  const mode = (modeParam as unknown as SHIFT_FORM_MODES) || SHIFT_FORM_MODES.ADD;

  useLayoutEffect(() => {
    // Modify the screen title and add a cancel button to the header
    const screenTitle = date ? dayjs(date).format() : 'Add Shift';

    const headerLeft = Platform.select({
      ios: () => (
        <HeaderBackButton
          tintColor="#ff3479"
          onPress={() => router.back()}
        />
      ),
      default: undefined,
    });

    // Note: In Expo Router, header options are typically set in the _layout.tsx file
    // or using the Stack.Screen options. This useLayoutEffect is kept for compatibility
    // but may not work as expected in Expo Router.
  }, [router, date]);

  useEffect(() => {
    const preventGoingBack = (e: any) => {
      if (!ref.current?.unsavedChanges) {
        // If we don't have unsaved changes, then we don't need to do anything
        return;
      }

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert(
        'Unsaved Changes',
        'Are you sure you want to discard the changes?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: 'Yes',
            style: 'destructive',
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              // In Expo Router, we can't dispatch actions like in React Navigation
              // Instead, we just go back
              router.back();
            },
          },
        ],
      );
    };

    // Note: Expo Router doesn't have the same navigation listeners as React Navigation
    // This effect is kept for compatibility but may need to be adapted for Expo Router
    // You might want to use router.beforeNavigate or similar if available
  }, [router, ref]);

  const handleDateChange = (changedDate: string) => {
    setDate(changedDate);
  };

  if (!date) {
    return null;
  }

  return (
    <ShiftForm
      ref={ref}
      shiftDate={date}
      employeeId={employeeId}
      mode={mode}
      onSaveSuccess={() => router.back()}
      onCancelPress={() => router.back()}
      onEvent={(e) => console.log('Shift form event:', e)}
      onDateChange={handleDateChange}
    />
  );
}
