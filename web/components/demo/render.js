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
        const { navigate } = this.props.navigation;
        //TODO 可以拷贝属性赋值
        return (
            <View>
                <Text style={Style.name} >{state.name}</Text>
                <Button title="动态" onPress={() => navigate('Timeline')}/>
            </View>
        )
    }
}