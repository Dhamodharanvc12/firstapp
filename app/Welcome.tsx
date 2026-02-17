import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

export default function Welcome() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Silent</Text>
        <Image source={require('../assets/logo1.png')} style={styles.logo} />
        <Text style={styles.heading}>Moon</Text>
      </View>

      <Text style={styles.subText}>Hi Afsar, Welcome</Text>
      <Text style={styles.text}>to Silent Moon</Text>
      <Text style={styles.exploreText}>
        Explore the app, find some peace of mind to prepare for meditation
      </Text>

      <View style={styles.centerContainer}>
        <Image source={require('../assets/welcome.png')} style={styles.welcomeImage} />
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('CategorySelection')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E97FD',
    paddingTop: 60,
    paddingInline: 20,
    alignItems: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 30,
    height: 30,
    marginInline: 5,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFECCC',
    textAlign: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  exploreText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingInline: 10,
  },
  welcomeImage: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: 'white',
    paddingBlock: 14,
    paddingInline: 40,
    borderRadius: 50,
    marginBottom: 80,
    width: '100%',
  },
  buttonText: {
    color: '#8E97FD',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
