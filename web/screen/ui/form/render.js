import React from 'react';
import {
    TextInput,
    View,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        //TODO 可以拷贝属性赋值
        return (
            <View style={{margin:10}}>
                <TextInput
                    placeholder="请输入内容"
                    onChangeText={(text) => this.setState({text})}/>
            </View>
        )
    }
}