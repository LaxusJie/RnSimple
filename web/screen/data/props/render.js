import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import  Style from './style.js'
import UserItem from "../../../page/user/item/index";

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <UserItem name="张三" age="1"></UserItem>
                <UserItem></UserItem>
            </View>
        )
    }
}