import React from 'react';
import {
    View,
    Button,
    Text,
    TextInput
} from 'react-native';

import  Style from './style'

export default {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={Style.content}>
                    <Button
                        title="按钮"
                        onPress={()=>navigate('UiButton')}
                    />
                </View>
                <View style={Style.content}>
                    <Button
                        title="文本"
                        onPress={()=>navigate('UiText')}
                    />
                </View>
                <View style={Style.content}>
                    <Button
                        title="表单"
                        onPress={()=>navigate('UiForm')}
                    />
                </View>
                <View style={Style.content}>
                    <Button
                        title="列表（FlatList）"
                        onPress={()=>navigate('UiFlatList')}
                    />
                </View>
                <View style={Style.content}>
                    <Button
                        title="图片"
                        onPress={()=>navigate('UiImage')}
                    />
                </View>
                <View style={Style.content}>
                    <Button
                        title="滚动视图"
                        onPress={()=>navigate('UiScrollView')}
                    />
                </View>
            </View>
        )
    }
}