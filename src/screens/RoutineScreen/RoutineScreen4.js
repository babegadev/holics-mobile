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
      image: '../../../images/walking.png',
      duration: '1 minute',
    },
    {
      image: '../../../images/bus.png',
      duration: '32 minutes',
    },
    {
      image: '../../../images/train.png',
      duration: '1 hour 3 minutes',
    },
    {
      image: '../../../images/car.png',
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
        <ScrollView horizontal>
          <View>
            <Image source={require('../../../images/house.png')} />
            <View />
          </View>
          {data.map((dataObj, index) => (
            <View key={index} style={tw`bg-red-400`}>
              <View>
                <Image source={{uri: dataObj.image}} />
              </View>
              <View
                style={tw`h-[0.5px] w-${
                  convertToMinutes(dataObj.duration) / totalDuration
                }`}
              />
            </View>
          ))}
          <View>
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
