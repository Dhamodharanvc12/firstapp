import { StyleSheet, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';
import BackButton from '../components/BackButton';
import AppButton from '../components/AppButton';
import SocialButton from '../components/SocialButton';
import Input from '../components/Input';
import { RootStackParamList } from '../../App';

export default function SignIn() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <BackButton />

      <Text style={styles.welcomeText}>Welcome Back!</Text>

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

      <Text style={styles.loginButton}>
        OR LOG IN WITH EMAIL
      </Text>

      <Input placeholder="Email Address" />
      <Input placeholder="Password" secureTextEntry />

      <AppButton
        title="LOG IN"
        onPress={() => navigation.navigate('GetStarted')}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBlock: 20,
  },
  loginButton: {
    textAlign: 'center',
    marginBlock: 20,
    color: '#999',
  }
});
