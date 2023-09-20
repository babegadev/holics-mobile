import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

const convertToMinutes = durationString => {
  const parts = durationString.split(' ');

  let totalMinutes = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.includes('hour')) {
      totalMinutes += parseInt(parts[i - 1]) * 60;
    } else if (part.includes('minute')) {
      totalMinutes += parseInt(parts[i - 1]);
    }
  }

  return totalMinutes;
};

export default function RoutineScreen2({navigation}) {
  const data = [
    {
      image:
        '/Applications/Documents/programming/UberHolics/images/walking.png',
      duration: '1 minute',
    },
    {
      image: '/Applications/Documents/programming/UberHolics/images/bus.png',
      duration: '32 minutes',
    },
    {
      image: '/Applications/Documents/programming/UberHolics/images/train.png',
      duration: '1 hour 3 minutes',
    },
    {
      image: '/Applications/Documents/programming/UberHolics/images/car.png',
      duration: '2 hours 3 minutes',
    },
  ];

  const totalDuration = data.reduce(
    (acc, item) => acc + convertToMinutes(item.duration),
    0,
  );

  return (
    <View style={tw`bg-white h-19/25 rounded-2xl`}>
      <View style={tw`p-5`}>
        <Text style={tw`font-bold`}>Confirmation</Text>
        <View style={tw`  items-center my-4  mb-6`}>
          <View style={tw` bg-black w-full h-[0.5px]`} />
          <View style={tw`flex flex-row justify-around w-full py-4`}>
            <View style={tw`flex flex-row items-center`}>
              <Image source={require('../../../images/mapMarker.png')} />
              <Text>21 km</Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Image source={require('../../../images/timer.png')} />
              <Text>62 mins</Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Image source={require('../../../images/stackOfMoney.png')} />
              <Text>$32.11</Text>
            </View>
          </View>
          <View style={tw` bg-black w-full h-[0.5px]`} />
        </View>
        <ScrollView horizontal style={tw`bg-gray-200 mb-3 rounded-xl`}>
          <View style={tw`flex flex-row items-center`}>
            <Image source={require('../../../images/house.png')} />
            <View style={tw`h-[1px] w-10 bg-black`} />
          </View>
          {data.map((dataObj, index) => (
            <View key={index} style={tw` flex flex-row items-center`}>
              <View>
                <Image
                  source={{uri: dataObj.image}}
                  style={tw`h-10 w-10 m-2 rounded-lg`}
                />
              </View>
              <View style={tw`h-[1px] w-10 bg-black`} />
            </View>
          ))}
          <View style={tw`flex flex-row items-center`}>
            <Image source={require('../../../images/building.png')} />
          </View>
        </ScrollView>
        <TouchableHighlight onPress={() => navigation.navigate('HomeScreen')}>
          <View style={tw`bg-black py-6 rounded-lg`}>
            <Text style={tw`text-white text-center`}>Schedule it!</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
