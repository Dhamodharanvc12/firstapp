import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View } from 'react-native'
import SignIn from '../signInPages/SignIn';
import Welcome from '../Welcome';
import CategorySelection from '../CategorySelection';
import MeditationSetting from '../MeditationSetting';
import Home from '../Home';
import SignInWelcomePage from '../signInPages/SignInWelcomePage';
import SignUp from '../signInPages/SignUp';
import TabNavigation from './TabNavigation';
import CourseDetails from '../CourseDetails';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  GetStarted: undefined;
  CategorySelection: undefined;
  MeditationSetting: undefined;
  CourseDetails:undefined;
  MainTab: { 
    screen?:'Home' | 'Sleep' | 'Meditate' | 'Music' | 'Avatar'
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
       <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={SignInWelcomePage} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="GetStarted" component={Welcome} />
          <Stack.Screen name="CategorySelection" component={CategorySelection} />
          <Stack.Screen name="MeditationSetting" component={MeditationSetting} />
          <Stack.Screen name="MainTab" component={TabNavigation} />
          <Stack.Screen name="CourseDetails" component={CourseDetails} />
        </Stack.Navigator>
  )
}

export default MainNavigation
