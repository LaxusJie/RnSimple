// import React from 'react';
// import {
//     StyleSheet,
// } from 'react-native';
import WeStyleSheet from "../../../components/WeStyleSheet";
import colorStyle from "../../../components/color/styles"
import  fontStyle from "../../../components/font/styles"
export default WeStyleSheet.create({
    container: {
        flexGrow:1,
        backgroundColor: colorStyle.gray,
    },
    list:{
        display:"none",
    },
    empty:{
        display:"flex",
        justifyContent:"center",
        flexGrow:1,
        backgroundColor:colorStyle.white,
        paddingTop:218,
        paddingBottom:560,
    },
    pic:{
        width:828,
        height:362,
        alignSelf:"center",
        marginBottom:60,
    },
    info:{
        color:colorStyle.emptyInfo,
        fontSize:fontStyle.fontContent,
        textAlign:"center",
        marginBottom:30,
    },
    add:{
        width:178,
        height:178,
        marginTop:100,
        alignSelf:"center",
    }
})
