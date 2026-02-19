import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Home';
import Avatar from '../Avatar';
import Meditate from '../Meditate';
import Music from '../Music';
import Sleep from '../Sleep';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Sleep') iconName = 'hotel';
          else if (route.name === 'Meditate') iconName = 'self-improvement';
          else if (route.name === 'Music') iconName = 'music-note';
          else if (route.name === 'Avatar') iconName = 'person';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8E97FD',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Sleep"
        component={Sleep}
        options={{
          tabBarStyle: {
            backgroundColor: '#03174C',
          },
          tabBarActiveTintColor: '#8E97FD',
        }}
      />
      <Tab.Screen name="Meditate" component={Meditate} />
      <Tab.Screen name="Music" component={Music} />
      <Tab.Screen name="Avatar" component={Avatar} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
