import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
      activeOpacity={0.7}
    >
      <Text style={styles.arrow}>←</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  arrow: {
    fontSize: 30,
    color: "#000",
  },
});
