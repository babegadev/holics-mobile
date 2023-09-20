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
import MapView from 'react-native-maps';

import {useSelector} from 'react-redux';
import {selectDestination, selectOrigin} from './slices/navSlice';

const Stack = createNativeStackNavigator();

const pageNum = [1, 2, 3, 4];

export default function NavOptions({navigation}) {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <View style={tw`h-full`}>
      <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <SafeAreaView style={tw`bg-black rounded-2xl justify-between h-3/5`}>
        <View style={tw``}>
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
        <View style={tw` flex-1 rounded-2xl my-10`}>
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
