import React from 'react';
import {
    View,
    TextInput,
    Button,
    Text,
} from 'react-native';

import styles from './style'
export default {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.intro}>
                    <TextInput style={styles.inp}
                               underlineColorAndroid="transparent"
                               multiline={true}
                    >此示范田种植作物草莓,品种小白,小白品种富含维生素,有丰富的营养价值,且香甜可口,有淡淡的行涛维.</TextInput>
                </View>
                <View style={styles.change}>
                    <Button
                        title="修改"
                        style={styles.btn}
                    />
                </View>
                <View style={styles.change}>
                    <Button
                        title="确定"
                        style={styles.btn}
                    />
                </View>
                <View style={styles.cancel}>
                    <Text style={styles.abolish}>取消</Text>
                </View>
            </View>
        )
    }
}