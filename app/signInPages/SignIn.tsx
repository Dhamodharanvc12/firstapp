import { TouchableOpacity, Text, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export default function SignIn() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Text style={styles.arrow}>←</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.welcome}>Welcome Back!</Text>

            <Pressable style={styles.button}>
                <Image
                    source={require('../../assets/facebook.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.buttonText}>Continue with Facebook</Text>
            </Pressable>

            <Pressable style={styles.googleButton}>
                <Image
                    source={require('../../assets/google.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.googletext}>Continue with Google</Text>
            </Pressable>

            <Text style={{ fontSize: 16, textAlign: "center", color: "#15131389", marginBlock: 20 }}>OR LOG IN WITH EMAIL</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#999"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>

            <Pressable style={styles.button} onPress={()=>navigation.navigate("GetStarted")}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </Pressable>

            <Text style={{ fontSize: 16, textAlign: "center", color: "black", marginTop: 20 }}>Forgot Password?</Text>

            <Text style={styles.signUpText}>
                ALREADY HAVE AN ACCOUNT? <Text style={{ color: "#8E97FD" }} onPress={() => navigation.navigate("SignUp")}>SIGN UP</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    arrow: {
        fontSize: 30,
        color: '#000',
    },
    welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBlock: 20,
    },
    button: {
        backgroundColor: "#8E97FD",
        paddingBlock: 14,
        paddingInline: 20,
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
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 16,
    },
    googleButton: {
        backgroundColor: "white",
        paddingBlock: 14,
        paddingInline: 20,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderColor: "#15131394",
        borderWidth: 1
    },
    googletext: {
        color: "black",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 16,
    },
    inputContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 12,
        paddingInline: 15,
        paddingBlock: 10,
        backgroundColor: "#fff",
    },
    input: {
        fontSize: 16,
        color: "#000",
    },
    signUpText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 80,
        color: "#666",
    },
});
