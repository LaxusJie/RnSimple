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
                <View style={{margin:10}}>
                    <Button
                        title="点我"
                        onPress={this.goto}
                    />
                    <Button
                        title="不可用"
                        disabled
                    />
                </View>
            </View>
        )
    }
}