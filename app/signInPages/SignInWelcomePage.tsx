import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import ScreenContainer from "../components/ScreenContainer";
import Header from "../components/Header";
import AppButton from "../components/AppButton";

export default function SignInWelcomePage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <Header logo={require("../../assets/logo.png")} />

      <View style={styles.content}>
        <Image
          source={require("../../assets/pageImage.png")}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.title}>We are what we do</Text>

        <Text style={styles.subtitle}>
          Thousands of people are using Silent Moon for small meditation
        </Text>
      </View>

      <View>
        <AppButton
          title="SIGN UP"
          onPress={() => navigation.navigate("SignUp")}
        />

        <Text style={styles.loginText}>
          ALREADY HAVE AN ACCOUNT?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("SignIn")}
          >
            LOG IN
          </Text>
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  loginLink: {
    color: "#8E97FD",
    fontWeight: "bold",
  },
});
