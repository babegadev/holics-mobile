import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import HomeScreen from '../src/screens/HomeScreen';

// import { Container } from './styles';

const Tab = createMaterialTopTabNavigator();

export default function WelcomeScreen() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Library" component={LibraryScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="History" component={HistoryScreen} />  */}
    </Tab.Navigator>
  );
}
