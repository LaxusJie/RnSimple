import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        //TODO 可以拷贝属性赋值
        return (
            <View>
                <Text style={Style.name} >{state.name}</Text>
            </View>
        )
    }
}