'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

container:{
	flex:1,
	backgroundColor:"#fefefe",
},
 
container_mid:{
	alignItems:"center",
	flexGrow:1,
	justifyContent:"center",
},
logo_login:{
	width:100,
	height:100,
},
wrapper:{
	"flex":1,
	"backgroundColor":"red",
	"justifyContent":"center",
	"alignItems":"center",
},
fullview: {
	"flex":1,
	"justifyContent": "center",
	"alignItems":"center",
},
textLogo:{
	   fontSize: 80,
	   fontFamily: "evil_text",
	   color:'#fff',
    textAlign: 'center',
},
textCopyright:{
	color:'#fff',
	   fontSize: 14,
    textAlign: 'center',
    paddingBottom:10,
},

});