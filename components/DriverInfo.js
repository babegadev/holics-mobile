import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function DriverInfo() {
  return (
    <View style={tw`flex justify-center items-center h-100%`}>
      <View style={tw`bg-black w-8/9 p-6 rounded-xl flex flex-row m-5`}>
        <View style={tw`w-full`}>
          <View style={tw`flex flex-row m-0.5 justify-between`}>
            <View style={tw`flex flex-row items-start`}>
              <View>
                <Image source={require('../images/car.png')} />
              </View>
              <Text style={tw`text-[#F7F7F7] font-bold text-xs`}>
                {' '}
                Arrive in
              </Text>
              <Text style={tw`text-[#1EF08F] font-bold text-xs`}> 10</Text>
              <Text style={tw`text-[#F7F7F7] font-bold text-xs`}> minutes</Text>
            </View>
            <View
              style={tw`bg-[#FFFCFC] p-1 px-2 ml-2 rounded-lg bg-opacity-20`}>
              <Text style={tw`text-[#1ECAF0] font-bold`}>Details</Text>
            </View>
          </View>
          <View style={tw`flex flex-row m-1 justify-between`}>
            <View style={tw`flex flex-row items-start`}>
              <View>
                <Image source={require('../images/driver.png')} />
              </View>
              <View style={tw`m-3`}>
                <Text style={tw`text-[#F7F7F7] font-bold text-base`}>
                  Steven Universe
                </Text>
                <Text style={tw`text-[#999999] font-bold text-xs`}>
                  Xenia (BG 1234 HR)
                </Text>
              </View>
              <View style={tw`flex flex-row items-end m-2`}>
                <Image
                  style={{width: 50, height: 50}} // Adjust width and height as needed
                  source={require('../images/bubbleChat.png')}
                />
                <Image
                  style={{width: 50, height: 50}} // Adjust width and height as needed
                  source={require('../images/call.png')}
                />
              </View>
            </View>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <View>
              <Text style={tw`text-white font-bold text-sm`}>SCBD</Text>
              <Text style={tw`text-white font-medium text-xs`}>
                7:30 am, departure
              </Text>
            </View>
            <View style={tw`bg-[#FED956] w-15 h-1 bottom-2`}></View>

            <View>
              <Text style={tw`text-white font-bold text-base`}>
                Stadion GBK
              </Text>
              <Text style={tw`text-white font-light text-xs`}>
                7:45 am, estimated arrival
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
