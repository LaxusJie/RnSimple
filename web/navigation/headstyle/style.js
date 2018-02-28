import React from 'react';
import WeStyleSheet from "../../components/WeStyleSheet";
export default WeStyleSheet.create({
    title: {
        fontSize: 54,
        color: 'white',
        alignSelf: 'center'
    },
    header: {
        height: 144,
        backgroundColor: '#00a4e8'
    },
    icon: {
        height: 68,
        width: 40,
    },
    back: {
        width: 140,
        height: 140,
        paddingLeft:48,
        flexDirection:'row',
        alignItems:'center',
    },
    textback: {
        width: 150,
        paddingRight:48,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        color:'white',
        fontSize:40
    }
})