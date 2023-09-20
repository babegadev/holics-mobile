// import React from 'react';
// import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
// import tw from 'twrnc';
// import {Gesture, GestureDetector} from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
// } from 'react-native-reanimated';

// const {height: SCREEN_HEIGHT} = Dimensions.get('window');

// export default function BottomSheet() {
//   const translateY = useSharedValue(0);

//   const gesture = Gesture.Pan().onUpdate(event => {
//     console.log(event.translationY);
//   });

//   const rBottomSheetStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateY: translateY.value}],
//     };
//   });

//   return (
//     <GestureDetector gesture={gesture}>
//       <Animated.View style={tw`h-full justify-end bg-black`}>
//         <View
//           style={[
//             tw`h-1/5 w-100% bg-white rounded-[25px] items-center`,
//             rBottomSheetStyle,
//           ]}>
//           <View style={tw`h-1 w-16 bg-black mt-2`} />
//           <View
//             style={tw`w-full mt-6 border border-transparent border-t-gray-200`}></View>
//         </View>
//       </Animated.View>
//     </GestureDetector>
//     // <View style={tw`h-full justify-end bg-black`}>
//     //   <View style={tw`h-1/5 w-100% bg-white rounded-[25px] items-center`}>
//     //     <View style={tw`h-1 w-16 bg-black mt-2`} />
//     //     <View
//     //       style={tw`w-full mt-6 border border-transparent border-t-gray-200`}>
//     //       <Text>test</Text>
//     //     </View>
//     //   </View>
//     // </View>
//   );
// }

import React, {useRef, useCallback, useState, shareRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import tw from 'twrnc';

export default function BottomSheetc({children, ref, snapPoints, onClose}) {
  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={onClose}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
    // <View style={tw`bg-black items-center justify-center`}>
    //   <Text style={tw`text-white`}>
    //     Open up App.tsx to start working on you app!
    //   </Text>
    // </View>
  );
}
