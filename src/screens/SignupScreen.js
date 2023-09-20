import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

export default function SignupScreen({navigation}) {
  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={tw` bg-black h-full`}>
      <SafeAreaView style={tw` bg-white h-full mt-30 rounded-[59px]`}>
        <Text style={tw`text-5xl p-6 pt-10 font-semibold text-center`}>
          Sign up
        </Text>
        <View>
          <TextInput
            placeholder="Username"
            style={tw`bg-[#D9D9D9] rounded-3xl p-5  text-black h-12 my-3 mx-6`}
          />
          <TextInput
            placeholder="Password"
            style={tw`bg-[#D9D9D9] rounded-3xl p-5  text-black h-12 my-3 mx-6`}
          />
          <TextInput
            placeholder="Confirm Password"
            style={tw`bg-[#D9D9D9] rounded-3xl p-5  text-black h-12 my-3 mx-6`}
          />
        </View>
        <View style={tw`items-center`}>
          <TouchableOpacity
            style={tw` w-11/12 mt-6 bg-black items-center justify-center h-16 rounded-3xl`}
            onPress={() => navigation.navigate('NavOptions')}>
            <Text style={tw`text-white text-2xl font-bold w-full text-center`}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw` mt-4 mb-2 ml-6`}>Or sign up through here</Text>
        <View style={tw`flex flex-row mb-4 justify-between mx-6`}>
          <TouchableOpacity
            style={tw`items-center justify-center w-46 border border-black rounded-lg py-2`}>
            <Image
              style={tw`w-8 h-8 `}
              source={require('/Applications/Documents/programming/UberHolics/images/googleLogo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`items-center justify-center w-46 border border-black rounded-lg py-2`}>
            <Image
              style={tw`w-10 h-10 `}
              source={require('/Applications/Documents/programming/UberHolics/images/appleLogo.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={tw` flex flex-row ml-6`}>
          <Text style={tw`pr-2`}>already have an account?</Text>
          <TouchableWithoutFeedback onPress={goToLoginScreen}>
            <Text style={tw`text-blue-400 underline `}>log in</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  );
}
