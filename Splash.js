import React, { Component } from 'react';
var style = require('./src/components/style_global/style_global');

import {

    Text,
    View



} from 'react-native';

export default class testfolder extends Component {
    render() {
        return (
        	<View  style={style.wrapper}>
	            <View style={style.fullview}>
		            <Text style={style.textLogo}>asd</Text> 
	            </View>
	            <View   >
		            <Text style={style.textCopyright}>me@copyright</Text> 
	            </View>

			</View>
        );
    }
}
