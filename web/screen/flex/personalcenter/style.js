import WeStyleSheet from "../../../components/WeStyleSheet";
// import {
//     StyleSheet,
//     Dimensions
// } from 'react-native';
import colorStyle from "../../../components/color/styles"
import fontStyle from "../../../components/font/styles"
export default WeStyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colorStyle.gray,
    },
    personalMessage:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:46,
        paddingRight:46,
        paddingTop:42,
        backgroundColor:colorStyle.active,
    },
    message:{
        flexDirection:"row",
    },
    pic:{
        width:216,
        height:216,
        borderRadius:216,
        marginRight:40,
    },
    name:{
        fontSize:fontStyle.fontTitle,
        color:colorStyle.white,
        marginBottom:40,
    },
    data:{
        borderWidth:1,
        borderColor:colorStyle.white,
        borderRadius:fontStyle.radius,
    },
    identity:{
        backgroundColor:colorStyle.white,
        marginTop:16,
        marginBottom:45,
    },
    btn:{
        fontSize:40,
        color:colorStyle.white,
        paddingTop:30,
        paddingBottom:30,
        paddingRight:50,
        paddingLeft:50,
    },
    active:{
        color:colorStyle.active,
    },
    list:{
        backgroundColor:colorStyle.white,
         marginTop:28,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:colorStyle.border,
    },
    item:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:46,
        marginRight:46,
        borderBottomWidth:1,
        borderColor:colorStyle.border,
    },
    title:{
        fontSize:fontStyle.fontPrompt,
        color:colorStyle.info,
        paddingTop:68,
        paddingBottom:68,
    },
    go:{
        width:20,
        height:37,
    },
    noBorder:{
        borderBottomWidth:0,
    },
    distance:{
        marginBottom:250,
    }
})