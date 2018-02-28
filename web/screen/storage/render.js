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
        return (
            <View>
                <Button title='本地存储' onPress={() => this.getStroage()}/>
            </View>
        )
    }
}