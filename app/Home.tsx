import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScreenContainer from './components/ScreenContainer';
import Header from './components/Header';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./navigation/MainNavigation";

const categories = [
  {
    id: 1,
    name: 'Focus',
    text: 'MEDITATE : 3 - 10 MINS',
    image: require('../assets/focus.png'),
  },
  {
    id: 2,
    name: 'Happiness',
    text: 'MEDITATE : 3 - 10 MINS',
    image: require('../assets/happiness.png'),
  },
];

export default function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header logo={require('../assets/logo.png')} />

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>
          Good Morning, Afsar
        </Text>
        <Text style={{ fontSize: 18, color: '#999', marginBottom: 20 }}>
          We wish you have a good day
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: '#8E97FD',
              padding: 15,
              borderRadius: 20,
              width: '48%',
            }}
          >
            <Image
              source={require('../assets/basics.png')}
              style={{ width: '100%', height: 100 }}
              resizeMode="contain"
            />

            <Text style={{ fontWeight: 'bold', color: 'white' }}>Basics</Text>
            <Text style={{ color: 'white' }}>Courses</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white' }}>3 -10 min</Text>
              <Pressable
                style={{
                  backgroundColor: 'white',
                  paddingBlock: 8,
                  paddingInline: 15,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Start</Text>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#FFC97E',
              padding: 15,
              borderRadius: 20,
              width: '48%',
            }}
          >
            <Image
              source={require('../assets/relaxation.png')}
              style={{ width: '100%', height: 100 }}
              resizeMode="contain"
            />

            <Text style={{ fontWeight: 'bold' }}>Relaxation</Text>
            <Text>Music</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text>3 -10 min</Text>

              <Pressable
                style={{
                  backgroundColor: 'white',
                  paddingBlock: 8,
                  paddingInline: 15,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Start</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#56506d',
            borderRadius: 20,
            marginVertical: 20,
          }}
        >
          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              Daily Thought
            </Text>
            <Text style={{ color: '#ccc', fontSize: 12 }}>
              MEDITATION : 3 - 10 MINS
            </Text>
          </View>
          <Image
            source={require('../assets/play.png')}
            style={{ height: 50, width: 50 }}
          />
        </View>

        <View>
          <Text
            style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}
          >
            Recommended for you
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {categories.map(cat => (
              <Pressable
                key={cat.id}
                style={{ marginRight: 15, alignItems: 'center' }}
                onPress={() => navigation.navigate('MeditationSetting')}
              >
                <View style={styles.card}>
                  <Image
                    source={cat.image}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>

                <Text>{cat.name}</Text>
                <Text>{cat.text}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    overflow: 'scroll',
  },
  card: {
    width: 150,
    backgroundColor: '#e2dfdf',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
