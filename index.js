/**
 * @format
 */

import {AppRegistry} from 'react-native';
import InjectBookScreen from './src/screens/main/InjectBookScreen'
import App from './App';
import Router from './src/router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
