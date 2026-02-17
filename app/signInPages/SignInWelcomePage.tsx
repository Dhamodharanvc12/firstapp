import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";

export default function SignInWelcomePage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.headingcontainer}>
                <Text style={styles.heading}>Silent</Text>
                <Image
                    source={require("../../assets/logo.png")}
                    style={{ width: 30, height: 30 }}
                />
                <Text style={styles.heading}>Moon</Text>
            </View>

            <View style={{ padding: 20 }}>
                <Image
                    source={require("../../assets/pageImage.png")}
                    style={{ width: "100%", height: 300 }}
                    resizeMode="cover"
                />
                <Text style={styles.heading1}>We are what we do</Text>
                <Text style={styles.subheading}>
                    Thousands of people are using Silent Moon for small meditation
                </Text>
            </View>

            <View>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.button}>Sign Up</Text>
                </Pressable>
                <Text style={styles.subheading}>
                    ALREADY HAVE AN ACCOUNT? <Text style={{color:"#8E97FD"}} onPress={()=>navigation.navigate("SignIn")}>LOG IN</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
    },
    headingcontainer: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 5,
    },
    heading1: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
    },
    subheading: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
        color: "#666",
    },
    button: {
        backgroundColor: "#8E97FD",
        color: "#fff",
        padding: 15,
        fontWeight:"bold",
        borderRadius: 50,
        textAlign: "center",
        marginTop: 50,
        fontSize: 16,
    }
});
