import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

// import { Container } from './styles';

export default function PayButton() {
  return (
    <TouchableOpacity
      style={tw` bg-green-400 rounded-3xl w-2/3 h-12 items-center flex justify-center`}>
      <Text>Pay</Text>
    </TouchableOpacity>
  );
}
