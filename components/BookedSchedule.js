import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export default function BookedSchedule() {
  const sheetRef = useRef < BottomSheet > null;
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['30%'];

  return (
    <View style={tw`bg-black w-8/9 p-6 rounded-xl flex flex-row m-5`}>
      <View style={tw`w-55%`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`text-[#FED956] font-bold text-xl`}>Scheduled</Text>
          <View style={tw`bg-gray-400 rounded-full ml-2 p-2`}>
            <Image
              source={require('/Applications/Documents/programming/UberHolics/images/building.png')}
            />
          </View>
          <View style={tw`bg-[#FED956] p-1 px-2 ml-2 rounded-lg `}>
            <Text style={tw`font-bold`}>Job</Text>
          </View>
        </View>
        <View style={tw`flex flex-row items-center justify-between`}>
          <View>
            <Text style={tw`text-white font-bold text-lg`}>7:30 AM</Text>
            <Text style={tw`text-white font-bold text-xs`}>Departure</Text>
          </View>
          <View style={tw`bg-white w-6 h-1 bottom-2`}></View>
          <View>
            <Text style={tw`text-white font-bold text-lg`}>8:30 AM</Text>
            <Text style={tw`text-white font-bold text-xs`}>Arrival</Text>
          </View>
        </View>
      </View>
      <View style={tw`w-40% ml-6`}>
        <View style={tw`flex flex-1 flex-row justify-around items-center ml-4`}>
          <TouchableOpacity style={tw`items-center`}>
            <Image
              style={tw`w-12 h-12`}
              source={require('/Applications/Documents/programming/UberHolics/images/pay.png')}
            />
            <Text style={tw`text-[#1EF08F]`}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center`}>
            <Image
              style={tw`w-12 h-12`}
              source={require('/Applications/Documents/programming/UberHolics/images/details.png')}
            />
            <Text style={tw`text-[#1EF08F]`}>Details</Text>
          </TouchableOpacity>
        </View>
        {/* <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}>
          <BottomSheetView>
            <Text>Hello</Text>
          </BottomSheetView>
        </BottomSheet> */}
      </View>
    </View>
  );
}
