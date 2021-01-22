/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import SearchFilter from './src/screens/SearchFilter/index';
import Application from './src/screens/Application';

AppRegistry.registerComponent(appName, () => Application);
