import { Clock, ClockRef, EventDetailsClockInOut } from "@easyteam/ui";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

import { geolocation } from "@/configs/geolocation";

const HeaderRight = ({ hasOpenedShift }: { hasOpenedShift: boolean }) => {
  return hasOpenedShift ? (
    <View>
      <Text>Shift notes</Text>
    </View>
  ) : null;
};

export function ClockScreen() {
  const clockRef = useRef<ClockRef>(null);
  const navigation = useNavigation();
  const [hasOpenedShift, setHasOpenedShift] = useState(false);
  const [renders, setRenders] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight.bind(null, { hasOpenedShift }),
    });
  }, [hasOpenedShift, navigation]);

  const onClockInOutEvent = useCallback(
    (event: EventDetailsClockInOut) => {
      switch (event.event_type) {
        case "onClockIn":
          setHasOpenedShift(true);
          break;
        case "onClockOut":
          setHasOpenedShift(false);
          break;
      }
    },
    [setHasOpenedShift]
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      if (!clockRef.current?.hasOpenedShift) {
        if (renders < 10) {
          setRenders((prev) => prev + 1);
        }
      } else {
        setHasOpenedShift(clockRef.current.hasOpenedShift);
      }
    }, 500);
  }, [renders, setRenders, setHasOpenedShift]);

  return (
    <Clock
      ref={clockRef}
      onEvent={onClockInOutEvent}
      longitude={geolocation.longitude}
      latitude={geolocation.latitude}
      customStrings={{
        restrictClockIn: "Restricted!",
      }}
    />
  );
}
