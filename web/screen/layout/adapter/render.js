import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from './style'

export default {
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    width,height的值不能为百分数,不能有单位
                </Text>
                <View style={styles.small}/>
                <View style={styles.half}>
                    <Text>宽高分别为屏幕一半</Text>
                </View>
                <View style={styles.full}>
                    <Text>宽为满屏</Text>
                </View>
            </View>
        )
    }
}