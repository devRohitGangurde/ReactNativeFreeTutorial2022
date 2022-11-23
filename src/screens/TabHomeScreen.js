import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabHomeScreen = () => {


  const Tab =   createBottomTabNavigator();

  return (
   <NavigationContainer>
       <Tab.Navigator 
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tab1') {
            iconName = focused
              ? 'heart'
              : 'heart-o';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'star' : 'star-o';
          }else{
            iconName = focused ? 'star' : 'star-o';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'red',
      })}>

          <Tab.Screen name="Tab1" component={TabOneScreen}/>
          <Tab.Screen name="Tab2" component={TabTwoScreen}/>
          <Tab.Screen name="Tab3" component={TabOneScreen}/>
          <Tab.Screen name="Tab4" component={TabTwoScreen}/>

       </Tab.Navigator>

   </NavigationContainer>
  )
}

export default TabHomeScreen

const styles = StyleSheet.create({})