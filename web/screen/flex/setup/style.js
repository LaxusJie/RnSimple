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
        backgroundColor: colorStyle.white,
    },
    list:{
        backgroundColor:colorStyle.white,
         marginTop:28,
        marginLeft:46,
        marginRight:46,
    },
    item:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        alignItems:"center",
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
    signOut:{
        justifyContent:"center",
        marginTop:540,
        marginBottom:130,
        borderWidth:1,
        borderColor:colorStyle.active,
        borderRadius:fontStyle.radius,
    },
    btn:{
        fontSize:fontStyle.fontTitleBig,
        color:colorStyle.active,
        textAlign:"center",
        paddingTop:49,
        paddingBottom:49,
    }
})