import React from 'react';
import {View, Text, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import tw from 'twrnc';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoutineScreen1 from './screens/RoutineScreen/RoutineScreen1';
import RoutineScreen2 from './screens/RoutineScreen/RoutineScreen2';
import RoutineScreen3 from './screens/RoutineScreen/RoutineScreen3';
import RoutineScreen4 from './screens/RoutineScreen/RoutineScreen4';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const pageNum = [1, 2, 3, 4];

export default function NavOptions({navigation}) {
  return (
    <View style={tw`h-full bg-green-500`}>
      <View style={tw`h-2/5 w-full flex justify-center items-center`}>
        <Text>Map</Text>
      </View>
      <SafeAreaView style={tw`bg-black rounded-2xl`}>
        <View style={tw`mb-8`}>
          <Text style={tw`text-white font-bold text-xl p-4`}>
            Setting Order
          </Text>
          <View style={tw`flex flex-row justify-around mx-8`}>
            {pageNum.map((pageNums, index) => (
              <View key={index}>
                <Text style={tw`text-white font-bold text-3xl`}>
                  {pageNums}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={tw` h-19/25 rounded-2xl`}>
          {/* <RoutineScreen4 /> */}
          <Stack.Navigator>
            <Stack.Screen
              name="RoutineScreen1"
              component={RoutineScreen1}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RoutineScreen2"
              component={RoutineScreen2}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RoutineScreen3"
              component={RoutineScreen3}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RoutineScreen4"
              component={RoutineScreen4}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </View>
  );
}
