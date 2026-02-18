import { StyleSheet, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import BackButton from '../components/BackButton';
import SocialButton from '../components/SocialButton';
import Input from '../components/Input';
import AppButton from '../components/AppButton';
import { RootStackParamList } from '../navigation/MainNavigation';

export default function SignUp() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <BackButton />

      <Text style={styles.createAccountText}>Create Your Account</Text>

      <SocialButton
        title="Continue with Facebook"
        icon={require('../../assets/facebook.png')}
      />

      <SocialButton
        title="Continue with Google"
        icon={require('../../assets/google.png')}
        backgroundColor="white"
        textColor="black"
        border
      />

      <Text style={styles.signUpwithText}>OR SIGN UP WITH EMAIL</Text>

      <Input placeholder="Name" />
      <Input placeholder="Email Address" />
      <Input placeholder="Password" secureTextEntry />

      <AppButton
        title="GET STARTED"
        onPress={() => navigation.navigate('GetStarted')}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  createAccountText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBlock: 20,
  },
  signUpwithText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
    marginBlock: 20,
  },
});
