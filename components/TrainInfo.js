import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function TrainInfo() {
  return (
    <View style={tw`flex justify-center items-center h-full`}>
      <View style={tw`bg-black w-8/9 p-6 rounded-xl flex flex-row m-5`}>
        <View style={tw`w-15% flex flex-col justify-center`}>
          <View style={tw`m-2`}>
            <Image source={require('../images/train.png')} />
          </View>
          <Text style={tw`text-[#FFFFFF] font-bold text-xs m-1`}>
            Train Ticket
          </Text>
        </View>
        <View style={tw`w-30% m-2`}>
          <Image
            style={{width: 110, height: 110}}
            source={require('../images/qrCode.png')}
          />
        </View>
        <View style={tw`w-10% m-1`}>
          <View style={tw`bg-[#FED956] w-1 h-26 m-2 justify-center`}></View>
        </View>
        <View style={tw`w-40%`}>
          <View style={tw`flex flex-row`}>
            <View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Gelora Bung Karno
              </Text>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-[#FFFFFF] font-bold text-sm`}>07:45</Text>
                <Text style={tw`text-[#FFFFFF] font-bold text-xs`}>am</Text>
              </View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Departure
              </Text>
            </View>
          </View>
          <View style={tw`m-3`} />
          <View style={tw`flex flex-row`}>
            <View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Dukuh Atas 2
              </Text>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-[#FFFFFF] font-bold text-sm`}>08:10</Text>
                <Text style={tw`text-[#FFFFFF] font-bold text-xs`}>am</Text>
              </View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Estimated arrival
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
