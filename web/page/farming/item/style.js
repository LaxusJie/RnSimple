import WeStyleSheet from "../../../components/WeStyleSheet";
// import {
//     StyleSheet,
//     Dimensions
// } from 'react-native';
import colorStyle from "../../../components/color/styles"
import  fontStyle from "../../../components/font/styles"

export default WeStyleSheet.create({
    stage:{
      fontSize:fontStyle.fontContent,
      color:colorStyle.active,
      marginBottom:16,
    },
    info:{
        fontSize:36,
        color:colorStyle.info,
        lineHeight:60,
    },
    picture:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"flex-start",
    },
    image:{
        width:208,
        height:168,
        marginRight:52,
        marginBottom:40,
        marginTop:30,
    },
})