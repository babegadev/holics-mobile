import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';
import tw from 'twrnc';

const colors = {
  work: '#FF5151',
  school: '#1EF08F',
  course: '#1ECAF0',
  hangout: '#FED956',
  traveling: '#C67BE9',
  visitation: '#EE933F',
  picnic: '#FFFCFC',
};

const data = [
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
  {
    image: '/Applications/Documents/programming/UberHolics/images/House.png',
    status: 'Work',
    color: '#FF5151',
    departure: {
      time: '7:30 AM',
      state: 'Departure',
      address: 'SCBD',
    },
    arrival: {
      time: '8:30 AM',
      state: 'Arrival',
      address: 'Palyparq',
    },
  },
];

export default function ScheduledLists() {
  return (
    // <View style={tw`flex bg-black flex-row p-6 rounded-3xl mt-12`}>
    //   <View style={tw`pb-3`}>
    //     <View style={tw`bg-blue-500 rounded-full p-4`}>
    //       <Image
    //         source={require()}
    //         style={tw`h-12 w-12`}
    //       />
    //     </View>
    //     <View
    //       style={tw`absolute bg-yellow-400 bottom-0 inset-x-3 p-1 rounded-lg`}>
    //       <Text style={tw` text-xs text-center`}>Work</Text>
    //     </View>
    //   </View>
    //   <View
    //     style={tw`ml-4 flex flex-row items-center justify-between flex-1`}>
    //     <View>
    //       <Text style={tw`text-white text-2xl font-semibold`}>7:30 AM</Text>
    //       <Text style={tw`text-white`}>Departure</Text>
    //       <Text style={tw`text-white`}>SCBD</Text>
    //     </View>
    //     <View style={tw`h-1 w-12 bg-white`} />
    //     <View>
    //       <Text style={tw`text-white text-2xl font-semibold`}>8:32 AM</Text>
    //       <Text style={tw`text-white`}>Arrival</Text>
    //       <Text style={tw`text-white`}>PalyParq</Text>
    //     </View>
    //   </View>
    // </View>

    <View>
      {data.map((dataObj, index) => (
        // <Text key={index} style={tw`text-[${letterObj.color}] font-bold text-6xl`}>{letterObj.letter}</Text>
        <View
          key={index}
          style={tw`flex bg-black flex-row p-4 rounded-3xl mt-2`}>
          <View style={tw`pb-3`}>
            <View style={tw`bg-[${dataObj.color}] rounded-full p-4`}>
              {/* <Image
                source={require('/Applications/Documents/programming/UberHolics/images/House.png')}
                style={tw`h-12 w-12`}
              /> */}
            </View>
            <View
              style={tw`absolute bg-yellow-400 bottom-0 inset-x-3 p-1 rounded-lg`}>
              <Text style={tw` text-xs text-center`}>{dataObj.status}</Text>
            </View>
          </View>
          <View
            style={tw`ml-4 flex flex-row items-center justify-between flex-1`}>
            <View>
              <Text style={tw`text-white text-2xl font-semibold`}>
                {dataObj.departure.time}
              </Text>
              <Text style={tw`text-white`}>{dataObj.departure.state}</Text>
              <Text style={tw`text-white`}>{dataObj.departure.address}</Text>
            </View>
            <View style={tw`h-1 w-12 bg-white`} />
            <View>
              <Text style={tw`text-white text-2xl font-semibold`}>
                {dataObj.arrival.time}
              </Text>
              <Text style={tw`text-white`}>{dataObj.arrival.state}</Text>
              <Text style={tw`text-white`}>{dataObj.arrival.address}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
