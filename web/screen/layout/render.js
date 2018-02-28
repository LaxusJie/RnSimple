import React from 'react';
import {
    View,
    Button,
    Text,
    TextInput
} from 'react-native';

import styles from './style'

export default {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <View style={styles.content}>
                    <Text style={styles.h1}>容器间布局</Text>
                    <Text>使用Flex和绝对定位</Text>
                    <Text style={styles.h1}>容器内布局</Text>
                    <Text>使用盒子模型的padding,margin等来完成</Text>
                </View>
                <View style={styles.content}>
                    <Button
                        title="Flex"
                        onPress={() => navigate('LayoutFlex')}
                    />
                </View>
                <View style={styles.content}>
                    <Button
                        title="绝对定位"
                        onPress={() => navigate('LayoutAbsolute')}
                    />
                </View>
                <View style={styles.content}>
                    <Button
                        title="适配"
                        onPress={() => navigate('LayoutAdapter')}
                    />
                </View>
            </View>
        )
    }
}