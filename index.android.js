/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from './Splash';
import Login from './src/components/login/login';

export default class testfolder extends Component {
  render() {
    return (
      <Login />
        
       
    );
  }
}
 

AppRegistry.registerComponent('testfolder', () => testfolder);
