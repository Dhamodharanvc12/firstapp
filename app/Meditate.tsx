import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import ScreenContainer from './components/ScreenContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './navigation/MainNavigation';

const fav = [
  {
    id: 1,
    name: 'All',
    image: require('../assets/all.png'),
  },
  {
    id: 2,
    name: 'My',
    image: require('../assets/my.png'),
  },
  {
    id: 3,
    name: 'Anxious',
    image: require('../assets/anxiety.png'),
  },
  {
    id: 4,
    name: 'Sleep',
    image: require('../assets/sleep.png'),
  },
  {
    id: 5,
    name: 'Kids',
    image: require('../assets/kids.png'),
  },
];

const categories = [
  {
    id: 1,
    image: require('../assets/7DaysofCalm.png'),
  },
  {
    id: 2,
    image: require('../assets/anxietRelease.png'),
  },
  {
    id: 3,
    image: require('../assets/sunRise.png'),
  },
  {
    id: 4,
    image: require('../assets/forest.png'),
  },
];
export default function Meditate() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'black', marginInline:"auto",marginTop:20 }}>Meditate</Text>
      <Text style={{ fontSize: 16, color: '#999', marginBlock: 20, textAlign: 'center' }}>
        we can learn to recognize when our minds are doing their normal everyday
        acrobatics
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
        style={{ flexGrow: 0 }}
      >
        {fav.map(cat => (
          <Pressable
            key={cat.id}
            style={{ marginRight: 15, alignItems: 'center' }}
            // onPress={() => navigation.navigate('CourseDetails')}
          >
            <View style={styles.card}>
              <Image
                source={cat.image}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <Text>{cat.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

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
            Daily Calm
          </Text>
          <Text style={{ color: '#ccc', fontSize: 12 }}>
            APR 30 + PAUSE PRACTICE
          </Text>
        </View>
        <Image
          source={require('../assets/play.png')}
          style={{ height: 50, width: 50 }}
        />
      </View>
      <View style={styles.grid1}>
        {categories.map(cat => (
          <Pressable
            key={cat.id}
            style={styles.card1}
            // onPress={() => navigation.navigate('MeditationSetting')}
          >
            <Image source={cat.image} style={styles.imageFull} />
          </Pressable>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#858484',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  grid1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card1: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },

  imageFull: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
});
