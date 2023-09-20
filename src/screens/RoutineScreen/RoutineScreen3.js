import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import tw from 'twrnc';

export default function RoutineScreen3({navigation}) {
  const paymentMethod = [
    {
      name: 'Cash',
      image: '/Applications/Documents/programming/UberHolics/images/cash.png',
    },
    {
      name: 'Master Card',
      image:
        '/Applications/Documents/programming/UberHolics/images/masterCard.png',
    },
  ];

  return (
    <View style={tw`bg-white h-19/25 rounded-2xl`}>
      <View style={tw`p-5 flex justify-between`}>
        <View style={tw`flex justify-between`}>
          <View style={tw`flex flex-row justify-between mx-1 mb-2`}>
            <Text style={tw`font-bold`}>Select Payment</Text>
            <View>
              <TouchableWithoutFeedback>
                <Text style={tw`text-[#3487D4] font-semibold`}>ADD NEW</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View>
            {paymentMethod.map((paymentMethods, index) => (
              <TouchableWithoutFeedback key={index}>
                <View
                  style={tw`flex flex-row items-center bg-gray-200 mb-4 rounded-lg`}>
                  <View style={tw`bg-black rounded-lg m-3`}>
                    <Image
                      source={{uri: paymentMethods.image}}
                      style={tw`h-10 w-10 m-2 rounded-lg`}
                    />
                  </View>
                  <View
                    style={tw`flex flex-row justify-between flex-1 items-center`}>
                    <View style={tw`pl-4`}>
                      <Text>{paymentMethods.name}</Text>
                    </View>
                    <View style={tw`bg-slate-300 rounded-full p-1 mr-5`}>
                      <Image
                        style={tw`h-4 w-4`}
                        source={require('/Applications/Documents/programming/UberHolics/images/checkList.png')}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View style={tw`flex items-center`}>
            <View style={tw`w-100% h-[0.5px] bg-black mb-2`} />
          </View>
          <View>
            <Text style={tw`font-bold mb-2`}>Promo Code</Text>
            <TouchableWithoutFeedback>
              <View
                style={tw`bg-gray-100 border border-dashed rounded-xl p-4 items-center mb-3`}>
                <Text style={tw`font-bold text-blue-600`}>ADD PROMO CODE</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
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
