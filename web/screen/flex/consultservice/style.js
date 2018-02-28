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
    title:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        borderBottomWidth:1,
        borderColor:colorStyle.border,
    },
    sign:{
        flexGrow:1,
    },
    active:{
        borderBottomWidth:1,
        borderColor:colorStyle.active,
    },
    highlight:{
      color:colorStyle.active,
    },
    name:{
        fontSize:fontStyle.font,
        color:colorStyle.title,
        textAlign:"center",
        paddingTop:50,
        paddingBottom:50,
    },
    list:{
        marginLeft:46,
        marginRight:46,
    },
    item:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        paddingTop:40,
        paddingBottom:40,
        borderBottomWidth:1,
        borderColor:colorStyle.border,
    },
    signInfo:{
        flexDirection:"row",
    },
    pic:{
        width:216,
        height:216,
        borderRadius:216,
        marginRight:38,
    },
    farmMessage:{
      justifyContent:"space-between"
    },
    message:{
        fontSize:fontStyle.fontContent,
        color:colorStyle.info,
    },
    farm:{
        color:colorStyle.active,
    },
    time:{
        fontSize:fontStyle.fontNav,
        color:colorStyle.warning,
    },
    location:{
        fontSize:fontStyle.fontNav,
        color:"#c5c8cb"
    }
})