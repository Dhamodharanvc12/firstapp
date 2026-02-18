import React from "react";
import { Pressable, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  border?: boolean;
};

export default function SocialButton({
  title,
  icon,
  onPress,
  backgroundColor = "#8E97FD",
  textColor = "#fff",
  border = false,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor },
        border && styles.border,
      ]}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
