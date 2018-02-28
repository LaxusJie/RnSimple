import WeStyleSheet from "../../../components/WeStyleSheet";
// import {
//     StyleSheet,
//     Dimensions
// } from 'react-native';
import colorStyle from "../../../components/color/styles"
import  fontStyle from "../../../components/font/styles"

export default WeStyleSheet.create({
    item:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"flex-start",
        paddingTop:54,
    },
    pic:{
        width:450,
        height:300,
    },
    content:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        flexGrow:1,
        marginLeft:32,
    },
    title:{
        fontSize:fontStyle.fontTitle,
        color:colorStyle.info,
    },
    money:{
        display:"none",
       fontSize:35,
        color:"#ff8080",
        marginTop:33,
    },
    prompt:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        alignItems:"center",
    },
    time:{
        fontSize:28,
        color:"#c5c8cb",
    },
    news:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    iconComment:{
        width:36,
        height:34,
    },
    comment:{
        fontSize:fontStyle.fontSize,
        color:colorStyle.title,
        marginLeft:18,
    },
    blueBean:{
        fontSize:49,
        color:colorStyle.active,
    },
})