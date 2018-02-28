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
    send:{
      marginRight:46,
      marginLeft:46,
        fontSize:41,
        color:colorStyle.info,
        paddingTop:52,
        paddingBottom:52,
    },
    sendName:{
      fontSize:fontStyle.fontTitle,
      color:colorStyle.active
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
        borderBottomColor:colorStyle.white,
    },
    comment:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"flex-end",
        alignItems:"center",
        marginTop:37,
    },
    iconComponent:{
        width:36,
        height:34,
        marginRight:18,
    },
    number:{
        fontSize:33,
        color:colorStyle.title,
    },
    commentContent:{
        backgroundColor:"#ebebeb",
        marginTop:48,
        marginBottom:60,
    },
    contentPadding:{
        paddingTop:36,
        paddingLeft:35,
    },
    news:{
        marginBottom:32,
        fontSize:34,
        color:colorStyle.info
    },
    active:{
        color:colorStyle.active
    }
})
