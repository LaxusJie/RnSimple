import WeStyleSheet from "../../../components/WeStyleSheet";
// import {
//     StyleSheet,
//     Dimensions
// } from 'react-native';
import colorStyle from "../../../components/color/styles"
import  fontStyle from "../../../components/font/styles"

export default WeStyleSheet.create({
    historyPage:{
        display:"flex",
        flexGrow:1,
        backgroundColor:colorStyle.white,
    },
    list:{
        marginLeft:46,
        marginRight:46,
    },
    item:{
        paddingBottom:54,
        borderBottomWidth:1,
        borderStyle:"solid",
        borderBottomColor:colorStyle.border,
    },
    sendPlan:{
        width:178,
        height:178,
        position:"absolute",
        right:0,
        top:1410,
    },
    noData:{
        display:"none",
    },
    iconRemind:{
        width:558,
        height:558,
        marginTop:278,
        alignSelf:"center",
    },
    message:{
        fontSize:36,
        color:"#a4a9ad",
        marginTop:72,
        alignSelf:"center",
    }
})