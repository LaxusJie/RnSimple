import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
} from 'react-native';

import  FormStyle from '../../components/form/style.js'

export default {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={FormStyle.content}>
                    <Button style={FormStyle.content} title="页面切换" onPress={() => navigate('Layer')}/>
                </View>
                <View style={FormStyle.content}>
                    <Button style={FormStyle.content} title="Tab切换--用户中心" onPress={() => navigate('Uc')}/>
                </View>
                <View style={FormStyle.content}>
                    <Button style={FormStyle.content} title="Tab切换--动态" onPress={() => navigate('Timeline')}/>
                </View>
                <View style={FormStyle.content}>
                    <Button style={FormStyle.content} title="抽屉" onPress={() => navigate('Setting')}/>
                </View>
            </ScrollView>
        )
    }
}