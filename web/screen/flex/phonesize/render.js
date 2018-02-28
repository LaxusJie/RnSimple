import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from './style'
import Item from "../../../page/phonesize"
export default {
    render() {
        let state = this.state;
        const  list = [{},{},{}];
        return (
            // 模拟器
            <View style={styles.container}>
               <Item/>
            </View>
        )
    }
}
