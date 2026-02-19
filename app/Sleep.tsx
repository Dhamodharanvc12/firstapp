import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
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
    name: 'Night Island',
    text: '45 MIN . SLEEP MUSIC',
    image: require('../assets/nightIsland.png'),
  },
  {
    id: 2,
    name: 'SWEET SLEEP',
    text: '45 MIN . SLEEP MUSIC',
    image: require('../assets/sweetSleep.png'),
  },
];

export default function Sleep() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 24, textAlign: "center", marginTop: 20 }}>Sleep Stories</Text>
      <Text style={{ color: 'white', fontSize: 16, textAlign:'center', marginBlock:10 }}>
        Soothing bedtime stories to help you fall into a deep and natural sleep
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

            <Text style={{ color: 'white' }}>{cat.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <ImageBackground
        source={require('../assets/sleepPage.png')}
        resizeMode="cover"
        style={styles.bgImage}
        imageStyle={styles.oceanImage}
      >
        <View style={styles.oceanContainer}>
          <Text style={styles.title}>The Ocean Moon</Text>
          <Text style={styles.subHeading}>
            Non-stop 8-hour mixes of our most popular sleep audio
          </Text>

          <Pressable
            style={styles.startButton}
            // onPress={() => navigation.navigate('CourseDetails')}
          >
            <Text style={styles.startText}>START</Text>
          </Pressable>
        </View>
      </ImageBackground>

      <View style={styles.gridContainer}>
        {categories.map(cat => (
          <View key={cat.id} style={styles.gridItem}>
            <Pressable style={styles.card1}>
              <Image source={cat.image} style={styles.imageFull} />
            </Pressable>
            <Text style={styles.gridTitle}>{cat.name}</Text>
            <Text style={styles.gridText}>{cat.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#03174C',
  },
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
  bgImage: {
    width: '100%',
    height: 260,
    marginTop: 25,
    justifyContent: 'center',
  },
  oceanImage: {
    borderRadius: 20,
  },
  oceanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    color: '#F4E1A1',
    fontWeight: '600',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: '#E0E6FF',
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#EDEDED',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  startText: {
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  grid1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card1: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageFull: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gridItem: {
    width: '48%',
    marginBottom: 15,
  },
  gridTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginTop: 5,
  },
  gridText: {
    color: 'white',
    fontSize: 14,
  },
});
