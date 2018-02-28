import React from 'react';
import {
    StyleSheet,
} from 'react-native';

 const styles = StyleSheet.create({
    h1: {
        color: '#ff7625',
        fontSize: 20,
        marginTop:5,
        marginBottom:5,
    },
    h2: {
        color: '#9d58ff',
        fontSize: 16,
        marginTop:5,
        marginBottom:5,
    },
    image: {
        width: 200,
        height: 200,
    },
    backGroup: {
        width: 550,
        height: 150,
    },
    content: {
        marginTop: 75,
    },
    news: {
        flex:1,
    },
    icon:{
        marginTop:2,
        marginLeft:2,
    },
    resizeImage:{
        width:200,
        height:100,
        backgroundColor:'#ff8e35',
    },
    contain:{
        resizeMode: 'contain',
        //TODO 庄君祥：这个看怎么抽取
        width:200,
        height:100,
        backgroundColor:'#ff8e35',
    },
})

export default styles