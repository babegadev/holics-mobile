import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import tw from 'twrnc';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoutineScreen1 from './screens/RoutineScreen/RoutineScreen1';
import RoutineScreen2 from './screens/RoutineScreen/RoutineScreen2';
import RoutineScreen3 from './screens/RoutineScreen/RoutineScreen3';
import RoutineScreen4 from './screens/RoutineScreen/RoutineScreen4';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AuthenticationScreen({navigation}) {
  const letters = [
    {
      letter: 'h',
      color: '#FF5151',
    },
    {
      letter: 'o',
      color: '#1EF08F',
    },
    {
      letter: 'l',
      color: '#1ECAF0',
    },
    {
      letter: 'i',
      color: '#FED956',
    },
    {
      letter: 'c',
      color: '#C67BE9',
    },
    {
      letter: 's',
      color: '#EE933F',
    },
    {
      letter: '.',
      color: '#FFFCFC',
    },
  ];

  return (
    <View style={tw` bg-black h-full`}>
      <View style={tw` justify-center flex-row mt-16`}>
        {letters.map((letterObj, index) => (
          <Text
            key={index}
            style={tw`text-[${letterObj.color}] font-bold text-3xl`}>
            {letterObj.letter}
          </Text>
        ))}
      </View>
      <Text style={tw` text-center text-white text-2xl font-bold`}>
        no time to waste
      </Text>
      <Stack.Navigator>
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
