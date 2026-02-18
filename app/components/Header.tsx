import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  logo: ImageSourcePropType;
};

export default function Header({ logo }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Silent</Text>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Moon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  logo: {
    width: 30,
    height: 30,
  },
});
