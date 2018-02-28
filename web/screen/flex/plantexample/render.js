import React from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';

import styles from './style'
import Item from "../../../page/phonesize"
export default {
    render() {
        return (
            <ScrollView style={styles.container}>
                {/*无数据时候的默认页面*/}
                <View style={styles.empty}>
                    <Image style={styles.pic}  source={require('./image/defaultBg.png')}></Image>
                    <Text style={styles.info}>请添加您的示范田</Text>
                    <Text style={styles.info}>为广大农民伯伯提供最迫切的种植服务!</Text>
                    <Image style={styles.add} source={require('../images/touch.png')}></Image>
                </View>
                <View style={styles.list}>
                    <Item/>
                </View>
            </ScrollView>
        )
    }
}
