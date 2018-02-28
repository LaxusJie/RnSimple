import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import  FormStyle from '../../components/form/style'
import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        //TODO 可以拷贝属性赋值
        return (
            <View>
                <Text style={FormStyle.name} >{state.name}</Text>
                <Button title="用户中心" onPress={() => navigate('Uc')}/>
            </View>
        )
    }
}