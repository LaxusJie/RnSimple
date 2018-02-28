import React from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';

import  Style from './style.js'

export default {
    render(){
        let state = this.state;
        const { navigate } = this.props.navigation;
        //TODO 可以拷贝属性赋值
        return (
            <View style={{margin:10}}>
                <Text>ScrollView：就是将一系列不确定高度的子组件装进一个确定高度的容器，实现滚动操作</Text>
                <ScrollView contentContainerStyle={Style.contentContainer}>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                    <Text style={Style.txt}>内容数据</Text>
                </ScrollView>
            </View>
        )
    }
}