import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import tw from 'twrnc';

export default function RoutineScreen1({navigation}) {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  return (
    <View style={tw`bg-white flex-1 rounded-2xl`}>
      <View style={tw`p-5 flex justify-between h-100%`}>
        <View style={tw`flex justify-start`}>
          <Text style={tw`font-bold`}>Routine</Text>
          <View style={tw`flex flex-row mx-4 h-10/20 py-5`}>
            <View style={tw` w-1/6 flex flex-col items-center`}>
              <View style={tw`bg-red-500 h-4 w-4 rounded-full`} />
              <View style={tw`bg-black h-18 w-1`} />
              <View style={tw`bg-blue-500 h-4 w-4 rounded-full`} />
            </View>
            <View style={tw` w-7/10 flex flex-col justify-between h-35`}>
              <View>
                <Text>Home</Text>
                <TextInput
                  placeholder="Pick up?"
                  onChangeText={text => setDeparture(text)}
                  style={tw` my-2 border-b-[0.2px]`}
                />
              </View>
              <View>
                <Text>Destination</Text>
                <TextInput
                  placeholder="Where to?"
                  onChangeText={text => setArrival(text)}
                  style={tw` my-2 border-b-[0.2px]`}
                />
              </View>
            </View>
            <View style={tw`w-1/6 flex items-center justify-center h-full`}>
              <View style={tw`bg-slate-200 p-1 rounded-full mt-12`}>
                <TouchableWithoutFeedback style={tw`bg-black`}>
                  <Image
                    style={tw`h-6 w-6`}
                    source={require('/Applications/Documents/programming/UberHolics/images/refresh.png')}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate('RoutineScreen2')}
          style={tw``}>
          <View style={tw`bg-black py-6 rounded-lg`}>
            <Text style={tw`text-white text-center`}>Continue</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
