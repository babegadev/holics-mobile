import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

import BookedSchedule from '../../components/BookedSchedule';
import DriverInfo from '../../components/DriverInfo';
import TrainInfo from '../../components/TrainInfo';

// import { Container } from './styles';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <View style={tw``}>
        <TrainInfo />
      </View>
    </View>
  );
}
