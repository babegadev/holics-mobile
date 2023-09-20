import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import tw from 'twrnc';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

const letters = [
  {
    letter: 'h',
    color: '#FF5151',
  },
  {
    letter: 'o',
    color: '#1EF08F',
  },
  {
    letter: 'l',
    color: '#1ECAF0',
  },
  {
    letter: 'i',
    color: '#FED956',
  },
  {
    letter: 'c',
    color: '#C67BE9',
  },
  {
    letter: 's',
    color: '#EE933F',
  },
  {
    letter: '.',
    color: '#FFFCFC',
  },
];

export default function PopupScreen({navigation}) {
  useEffect(() => {
    // Set a timeout to navigate to "Screen2" after 3 seconds (3000 milliseconds)
    const timeout = setTimeout(() => {
      navigation.navigate('AuthenticationScreen');
    }, 1000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View
      style={tw` flex-1 bg-black justify-center items-center flex flex-row`}>
      {letters.map((letterObj, index) => (
        <Text
          key={index}
          style={tw`text-[${letterObj.color}] font-bold text-6xl`}>
          {letterObj.letter}
        </Text>
      ))}
    </View>
  );
}
