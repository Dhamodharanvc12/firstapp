import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textColor?: string;
  backgroundColor?: string;
};

export default function AppButton({
  title,
  onPress,
  style,
  textColor = "#fff",
  backgroundColor = "#8E97FD",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
