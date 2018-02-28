import WeStyleSheet from "../../../components/WeStyleSheet";
import colorStyle from "../../../components/color/styles"
import fontStyle from "../../../components/font/styles"
export default WeStyleSheet.create({
    container:{
        flexGrow:1,
        paddingRight:46,
        paddingLeft:46,
        backgroundColor:colorStyle.white,
    },
    intro:{
        display:"flex",
        flexWrap:"wrap",
        marginTop:50,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:colorStyle.border,

    },
    inp:{
        height:656,
         maxHeight:656,
         marginLeft:32,
        marginRight:32,
        lineHeight:74,
        textAlignVertical:"top",
    },
    change:{
         display:"flex",
         justifyContent:"center",
         height:146,
         backgroundColor:colorStyle.active,
         borderRadius:5,
         marginTop:72,
    },
    btn:{
        fontSize:fontStyle.fontSize,
        paddingTop:52,
        paddingBottom:52,
    },
    cancel:{
        marginTop:72,
       borderWidth:1,
        borderStyle:"solid",
        borderColor:colorStyle.active,
        borderRadius:5,
    },
    abolish:{
        fontSize:fontStyle.fontTitleBig,
        color:colorStyle.active,
        textAlign:"center",
        paddingTop:45,
        paddingBottom:45,
    }
})