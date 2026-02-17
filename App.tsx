import React, { JSX } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInWelcomePage from './app/signInPages/SignInWelcomePage';
import SignUp from './app/signInPages/SignUp';
import SignIn from './app/signInPages/SignIn';
import Welcome from './app/Welcome';
import CategorySelection from './app/CategorySelection';
import MeditationSetting from './app/MeditationSetting';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  GetStarted: undefined;
  CategorySelection: undefined;
  MeditationSetting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={SignInWelcomePage} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="GetStarted" component={Welcome} />
          <Stack.Screen name="CategorySelection" component={CategorySelection} />
          <Stack.Screen name="MeditationSetting" component={MeditationSetting} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}
