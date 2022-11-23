import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CountryFlatList from './src/screens/CountryFlatList';
import DetailScreen from './src/screens/DetailScreen';
import InterstitialAdsScreen from './src/screens/Ads/InterstitialAdsScreen';
import RewardedAdsScreen from './src/screens/Ads/RewardedAdsScreen';
import LottieAnimationScreen from './src/screens/LottieAnimationScreen';
import TabHomeScreen from './src/screens/TabHomeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'TabHomeScreen'} component={TabHomeScreen}/>
        <Stack.Screen name={'LottieAnimationScreen'} component={LottieAnimationScreen}/>
        <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
        <Stack.Screen name={'CountryFlatList'} component={CountryFlatList}/>
        <Stack.Screen name={'DetailScreen'} component={DetailScreen}/>
        <Stack.Screen name={'InterstitialAdsScreen'} component={InterstitialAdsScreen}/>
        <Stack.Screen name={'RewardedAdsScreen'} component={RewardedAdsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
