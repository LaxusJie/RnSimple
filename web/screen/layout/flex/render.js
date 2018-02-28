import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
} from 'react-native';

import  styles from './style.js'

export default {
    render(){
        return (
            <View style={styles.root}>
                <View style={styles.screen}>
                    <Image source={require('./image/crop.png')} style={styles.image}/>
                    <Text style={[styles.name,styles.titleColor]}>
                        草莓
                    </Text>
                </View>
                <View style={styles.content}>
                    {/* TODO 庄君祥:  这里的样式太难看了*/}
                    <Text style={[styles.titleColor,styles.wordSize]}>张三 草莓地块儿1</Text>
                    <Text style={[styles.wordSize]}>地块ID : 12524532</Text>
                    <Text style={[styles.wordSize]}>签约日期 : 2017-10-10 </Text>
                    <Text style={[styles.warningColor,styles.wordSize]}>剩余天数 : 23天</Text>
                </View>
            </View>
        )
    }
}