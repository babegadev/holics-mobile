import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function WalkInfo() {
  return (
    <View style={tw`flex justify-center items-center h-full`}>
      <View style={tw`bg-black w-8/9 p-6 rounded-xl flex flex-row m-5`}>
        <View style={tw`w-full`}>
          <View style={tw`flex flex-row justify-between`}>
            <View style={tw`flex flex-row items-start`}>
              <Text style={tw`text-[#1EF08F] font-bold text-sm`}>21</Text>
              <Text style={tw`text-[#F7F7F7] font-bold text-sm`}>
                {' '}
                mins left!
              </Text>
            </View>
            <View
              style={tw`bg-[#FFFCFC] p-1 px-2 ml-2 rounded-lg bg-opacity-20`}>
              <Text style={tw`text-[#1ECAF0] font-bold`}>Details</Text>
            </View>
          </View>
          <View style={tw`flex flex-row justify-center`}>
            <View>
              <Text style={tw`text-white font-bold text-xs`}>211 m</Text>
              <Image
                source={require('../images/walking.png')}
                style={tw`items-center`}
              />
            </View>
          </View>
          <View style={tw`flex flex-row m-1 justify-center`}>
            <View style={tw`bg-[#FED956] w-80% h-1`}></View>
          </View>
          <View style={tw`flex flex-row items-center justify-between m-1`}>
            <View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Dukuh Atas BNI
              </Text>
              <View style={tw`flex flex-row items-end`}>
                <Text style={tw`text-[#FFFFFF] font-bold text-lg`}>8:10</Text>
                <Text style={tw`text-[#FFFFFF] font-bold text-xs mb-1`}>
                  AM
                </Text>
              </View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Departure
              </Text>
            </View>
            <View>
              <Text style={tw`text-[#FFFFFF] font-light text-xs`}>
                Gelora Bung Karno
              </Text>
              <View style={tw`flex flex-row items-end`}>
                <Text style={tw`text-[#FFFFFF] font-bold text-lg`}>8:32</Text>
                <Text style={tw`text-[#FFFFFF] font-bold text-xs mb-1`}>
                  AM
                </Text>
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
