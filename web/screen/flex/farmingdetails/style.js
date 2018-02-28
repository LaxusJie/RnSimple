import WeStyleSheet from "../../../components/WeStyleSheet";
// import {
//     StyleSheet,
//     Dimensions
// } from 'react-native';
import colorStyle from "../../../components/color/styles"
import fontStyle from "../../../components/font/styles"

export default WeStyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorStyle.white,
    },
    video:{
        height:592,
    },
    time:{
        fontSize:fontStyle.fontList,
        color:colorStyle.title,
        marginTop:48,
        marginBottom:48,
        marginLeft:46,
        marginRight:46,
    },
    item:{
      marginRight:46,
      marginLeft:46,
    },
    picture:{
        borderBottomWidth:0,
        borderBottomColor:colorStyle.warning,
    },
})