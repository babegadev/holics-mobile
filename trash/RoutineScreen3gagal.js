import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import tw from 'twrnc';

import Timeline from 'react-native-timeline-flatlist';

export default function RoutineScreen3({navigation}) {
  const data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
  ];
  return (
    <View style={tw`bg-white h-19/25 rounded-2xl`}>
      <View style={tw`p-5 flex justify-between`}>
        <View style={tw`flex justify-between`}>
          <Text style={tw`font-bold`}>Detailed Information</Text>
          <View>
            <Timeline data={data} style={tw`bg-red-500`} />
            <Text>Test</Text>
          </View>
          <View></View>
          <View></View>
          <View></View>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate('RoutineScreen4')}>
          <View style={tw`bg-black py-6 rounded-lg`}>
            <Text style={tw`text-white text-center`}>Continue</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
