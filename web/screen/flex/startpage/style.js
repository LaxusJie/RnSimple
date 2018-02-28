import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
export default StyleSheet.create({
    container: {
        // 根节点不设置宽度,且使用flex:1使其占满屏幕
        backgroundColor:'#00a4e8',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width:178,
        height:149,
        marginBottom:238,
    },
    start: {
        color:'#fff',
        fontSize: 13,
    }
})
const {height, width} = Dimensions.get('window');