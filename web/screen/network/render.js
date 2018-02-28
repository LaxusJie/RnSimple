import React from 'react';
import {
    View,
    TextInput,
    Button,
} from 'react-native';
import Network from './index.js';
import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput
                    placeholder="请输入手机号"
                    value={this.state.num}
                    onChangeText={(text) => this.setState({num:text})}/>
                <TextInput
                    placeholder="请输入密码"
                    value={this.state.pwd}
                    onChangeText={(text) => this.setState({pwd:text })}/>
                <Button title='登陆' onPress={() => this.getLogin()}/>
            </View>
        )
    }
}