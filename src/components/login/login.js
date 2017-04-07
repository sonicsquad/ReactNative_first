/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
/*var style = require('../../../src/components/style_global/style_global');*/
var style = require('../style_global/style_global');
import { View, Image } from 'react-native';

export default class testfolder extends Component {
  render() {
    return (
     
          <View style={style.container}>
          <View style= {style.container_mid}>
          	<Image 
          	style={style.logo_login}
          	source={require('../images/apple.png')}
          	/>
          	 </View>
          </View>
       
    );
  }
}
 