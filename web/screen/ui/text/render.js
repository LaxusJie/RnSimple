import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import Style from './style.js'

export default {
    render() {
        let state = this.state;
        return (
            <View style={Style.container}>
                <View>
                    <View>
                        <Text style={Style.title}>普通文本</Text>
                        <Text>{state.content}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={Style.title}>嵌套文本</Text>
                        <Text>
                            我是外层
                            <Text style={Style.content}>
                                我是内层
                            </Text>
                            我是外层
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={Style.title}>超过{state.numberOfLines}行显示成省略号</Text>
                    <Text
                        numberOfLines={state.numberOfLines}
                    >

                        样式

                        1. color 字体颜色

                        2. fontSize 字体大小

                        3. fontFamily 字体

                        4. fontStyle 字的样式 （normal：正常italic：斜体）

                        5. fontWeight 设置粗体（normal：正常bold：粗体100，200，300， 400， 500， 600， 700， 800， 900）

                        6.lineHeight 行高

                        7.textAlign 文字对其方式（auto：自动对齐left：左对齐right：右对齐 center：居中对齐）

                        8: textDecorationLine 下划线和删除线样式（none：无线underline：下划线line-through：删除线 underline
                        line-through：下划线和删除线）
                    </Text>
                </View>
                <View>
                    <View>
                        <Text style={Style.title}>事件</Text>
                        <Text onPress={() => (alert('单击事件'))}>我是可点击的文本框</Text>
                        <Text onLongPress={() => (alert('长按事件'))}>我是长按事件的文本框</Text>
                    </View>
                </View>

            </View>
        )
    }
}