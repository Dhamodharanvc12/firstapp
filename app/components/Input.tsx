import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function Input({
  placeholder,
  secureTextEntry = false,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
});
