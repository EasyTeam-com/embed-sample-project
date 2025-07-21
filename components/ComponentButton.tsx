import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function ComponentButton({
  name,
  description,
  icon,
  onPress,
}: Props) {
  const { width } = useWindowDimensions();
  const buttonWidth = width / 2 - 24;

  const color = "#ff3f60";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.5 : 1, maxWidth: buttonWidth },
      ]}
    >
      <View style={styles.titleContainer}>
        <Ionicons name={icon} size={32} color={color} />
        <ThemedText type="defaultSemiBold">{name}</ThemedText>
      </View>
      <ThemedText type="subtitle">{description}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    gap: 4,

    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
      },
      android: {
        borderWidth: 1,
        borderColor: "#c1c2c2",
      },
    }),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flex: 1,
  },
});
