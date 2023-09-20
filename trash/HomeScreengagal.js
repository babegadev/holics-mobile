import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

import PayButton from './PayButton';
import BottomSheetc from './BottomSheetc';
import ScheduledLists from './ScheduledLists';

export default function HomeScreengagal({navigate}) {
  const paymentSheetRef = useRef(null);
  const scheduleListsSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPointsScheduleLists = ['20%', '60%'];
  const snapPointsPayment = ['70%'];

  const handleSnapPress = useCallback(index => {
    paymentSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <GestureHandlerRootView
      style={tw`bg-black h-full items-center justify-center flex-1`}>
      <TouchableOpacity
        onPress={() => handleSnapPress(0)}
        style={tw` bg-green-400 rounded-3xl w-2/3 h-12 items-center flex justify-center`}>
        <Text>Pay</Text>
      </TouchableOpacity>
      <BottomSheetc
        ref={paymentSheetRef}
        snapPoints={snapPointsPayment}
        onClose={() => setIsOpen(false)}></BottomSheetc>
      <BottomSheetc
        ref={scheduleListsSheetRef}
        snapPoints={snapPointsScheduleLists}
        enablePanDownToClose={false}
        onClose={() => setIsOpen(false)}>
        <SafeAreaView>
          <ScrollView style={tw`h-full`}>
            <ScheduledLists />
          </ScrollView>
        </SafeAreaView>
      </BottomSheetc>
    </GestureHandlerRootView>
  );
}
