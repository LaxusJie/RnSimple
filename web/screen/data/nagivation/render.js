import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        const state = this.state;
        const { navigate } = this.props.navigation;
        const params = this.props.navigation.state.params;
        //TODO 可以拷贝属性赋值
        return (
            <View>
                <Text>{state.id}</Text>
                <Text>{state.name}</Text>
                <Text>{params.id}</Text>
                <Text>{params.name}</Text>
            </View>
        )
    }
}