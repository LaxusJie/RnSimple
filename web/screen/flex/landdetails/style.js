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
        paddingLeft: 46,
        paddingRight: 46,
    },
    land: {
        flexDirection: "row",
        flexWrap: "nowrap",
        marginTop: 54,
    },
    crops: {
        flexGrow: 0,
    },
    pic: {
        width: 180,
        height: 180,
        marginBottom: 36,
        borderRadius: 180,
        borderWidth: 1,
        borderColor: colorStyle.active,
    },
    type: {
        fontSize: 29,
        color: colorStyle.active,
        alignSelf: "center",
    },
    info: {
        flexGrow: 1,
        marginLeft: 46,
    },
    message: {
        fontSize: fontStyle.fontTitle,
        color: colorStyle.info,
        marginBottom: 34,
    },
    name: {
        color: colorStyle.active,
    },
    day: {
        color: colorStyle.warning,
    },
    address: {
        flexGrow: 0,
        fontSize: fontStyle.fontNav,
        color: "#c5c8cb"
    },
    master: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginTop: 105,
    },
    masterInfo: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colorStyle.active,
        borderRadius: 5,
        marginTop: 54,
    },
    masterMessage: {
        fontSize: fontStyle.fontTitle,
        color: colorStyle.info,
        textAlign: "center",
        marginBottom: 20,
    },
    masterName: {
        color: colorStyle.active,
        marginTop: 70,
    },
    consult: {
        backgroundColor: colorStyle.active,
        marginLeft: 107,
        marginRight: 107,
        marginBottom: 28,
        borderRadius: 5,
    },
    consultword: {
        marginLeft: 93,
        marginRight: 93,
        marginTop: 26,
        marginBottom: 26,
        color: colorStyle.white,
    },
    masterPic: {
        width: 114,
        height: 114,
        borderRadius: 114,
        position: "absolute",
        alignSelf:"center",
        zIndex: 10000,
    }
})