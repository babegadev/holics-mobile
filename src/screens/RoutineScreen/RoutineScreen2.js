import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function RoutineScreen2({navigation}) {
  const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [isTimeFromPickerVisible, setTimeFromPickerVisibility] =
    useState(false);
  const [isTimeToPickerVisible, setTimeToPickerVisibility] = useState(false);
  const [pickedTimeFrom, setPickedTimeFrom] = useState('');
  const [timeFromFormat, setTimeFromFormat] = useState('');
  const [pickedTimeTo, setPickedTimeTo] = useState('');
  const [timeToFormat, setTimeToFormat] = useState('');

  const showTimeFromPicker = () => {
    setTimeFromPickerVisibility(true);
  };

  const hideTimeFromPicker = () => {
    setTimeFromPickerVisibility(false);
  };

  const showTimeToPicker = () => {
    setTimeToPickerVisibility(true);
  };

  const hideTimeToPicker = () => {
    setTimeToPickerVisibility(false);
  };

  const handleConfirmTimeFrom = timeFrom => {
    const options = {hour: '2-digit', minute: '2-digit', hour12: true};
    const formattedTime = new Date(timeFrom).toLocaleTimeString(
      undefined,
      options,
    );
    const [timef, amPmf] = formattedTime.split(' ');

    setPickedTimeFrom(timef);
    setTimeFromFormat(amPmf);
    hideTimeFromPicker();
  };

  const handleConfirmTimeTo = timeTo => {
    const options = {hour: '2-digit', minute: '2-digit', hour12: true};
    const formattedTime = new Date(timeTo).toLocaleTimeString(
      undefined,
      options,
    );
    const [timet, amPmt] = formattedTime.split(' ');

    setPickedTimeTo(timet);
    setTimeToFormat(amPmt);
    hideTimeToPicker();
  };

  return (
    <View style={tw`bg-white h-19/25 rounded-2xl`}>
      <View style={tw`p-5`}>
        <Text style={tw`font-bold`}>Routine Details</Text>
        <Text style={tw``}>Working Days</Text>
        <View style={tw`  items-center my-4  mb-6`}>
          <View style={tw` flex flex-row w-full justify-between`}>
            {day.map((dayObj, index) => (
              <View
                key={index}
                style={tw`bg-black p-3 px-2 rounded-lg w-11 items-center`}>
                <TouchableWithoutFeedback>
                  <Text style={tw`text-white text-xs font-bold`}>{dayObj}</Text>
                </TouchableWithoutFeedback>
              </View>
            ))}
          </View>
        </View>
        <Text>Working Hours</Text>
        <View style={tw`mt-2 flex flex-row h-5/20 w-full justify-between`}>
          <View style={tw` flex flex-1 items-center`}>
            <Text>from</Text>
            <View style={tw`rounded-lg`}>
              <TouchableWithoutFeedback onPress={showTimeFromPicker}>
                <View style={tw`flex flex-row items-end`}>
                  <View style={tw`p-1 px-2 pb-0 pr-0 rounded-md`}>
                    <Text style={tw`text-2xl font-bold`}>
                      {pickedTimeFrom || 'Choose Time'}
                    </Text>
                  </View>
                  <View style={tw` rounded-md`}>
                    <Text style={tw`text-lg`}>{timeFromFormat || ''}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <DateTimePickerModal
                isVisible={isTimeFromPickerVisible}
                mode="time"
                onConfirm={handleConfirmTimeFrom}
                onCancel={hideTimeFromPicker}
              />
            </View>
          </View>
          <View style={tw`flex flex-1 items-center`}>
            <Text>to</Text>
            <View style={tw`rounded-lg`}>
              <TouchableWithoutFeedback onPress={showTimeToPicker}>
                <View style={tw`flex flex-row items-end`}>
                  <View style={tw`p-1 px-2 pb-0 pr-0 rounded-md`}>
                    <Text style={tw`text-2xl font-bold`}>
                      {pickedTimeTo || 'Choose Time'}
                    </Text>
                  </View>
                  <View style={tw` rounded-md`}>
                    <Text style={tw`text-lg`}>{timeToFormat || ''}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <DateTimePickerModal
                isVisible={isTimeToPickerVisible}
                mode="time"
                onConfirm={handleConfirmTimeTo}
                onCancel={hideTimeToPicker}
              />
            </View>
          </View>
        </View>
        <View style={tw`w-full h-[0.5px] bg-black`} />
        <TouchableHighlight
          onPress={() => navigation.navigate('RoutineScreen3')}>
          <View style={tw`bg-black py-6 rounded-lg`}>
            <Text style={tw`text-white text-center`}>Continue</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
