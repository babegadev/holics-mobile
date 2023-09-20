/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import ScheduledLists from './trash/ScheduledLists';
import BookedSchedule from './components/BookedSchedule';
import HomeScreen from './src/screens/HomeScreen';
import RoutineScreen4 from './src/screens/RoutineScreen/RoutineScreen4';
import NavOptions from './src/NavOptions';

AppRegistry.registerComponent(appName, () => App);
