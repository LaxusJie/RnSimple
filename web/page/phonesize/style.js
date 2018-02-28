// import React from 'react';
// import {
//     StyleSheet,
// } from 'react-native';
import WeStyleSheet from "../../components/WeStyleSheet";
import colorStyle from "../../components/color/styles"
import  fontStyle from "../../components/font/styles"

export default WeStyleSheet.create({
    massif: {
        marginBottom: 28,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 46,
        paddingRight:46,
        backgroundColor: colorStyle.white,
        borderColor:colorStyle.border,
        borderBottomWidth:1,
        borderTopWidth:1,
    },
    topBorder:{
        borderTopWidth:0,
    },
    info: {
        flexDirection: 'row',
        justifyContent:"space-between",
    },
    cropMessage:{
        display:"flex",
       flexDirection:"row",
    },
    crop: {
        alignItems: 'center',
        marginRight: 34,
    },
    cropImage: {
        width: 179,
        height: 179,
    },
    cropTitle: {
        marginTop: 40,
        fontSize:fontStyle.fontList,
    },
    highColor: {
        color: colorStyle.active,
    },
    normalColor: {
        color: colorStyle.info,
    },
    warnColor: {
        color: colorStyle.warning,
    },
    wordSize: {
        fontSize: fontStyle.fontPrompt,
        marginBottom:10,
    },
    area:{
      fontSize:fontStyle.fontNav,
      color:'#c5c8cb',
    },
    weatherInfo:{
       flexDirection:"row",
        alignItems:"center",
        marginTop:40,
   },
    weather: {
        width: 98,
        height: 87,
        marginRight:31,
    },
    temperature:{
        fontSize:fontStyle.font,
        color:colorStyle.title,
    },

    operateList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:64,
    },
    operate: {
        alignItems: 'center',
    },
    icon: {
        width: 126,
        height: 126,
        marginBottom:20,
    },
    title:{
        fontSize:fontStyle.fontContent,
        color:"#797979",
    },
    active:{
        color:colorStyle.active,
    },
    operateBorder:{
        borderRightWidth:1,
        borderColor:colorStyle.border,
        paddingRight:95,
    },
    unOpen:{
        fontSize:fontStyle.fontContent,
        color:colorStyle.warning,
        marginTop:23,
    }
})
