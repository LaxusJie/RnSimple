import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

import  FarmingItem from '../../../page/farming/item'
import styles from './style'
export default {
    render(){
        return (
            <View style={styles.container}>
                <View >
                    <Image style={styles.video} source={require("../images/green.png")}></Image>
                </View>
                <Text style={styles.time}>2017-10-10</Text>
                <View style={styles.item}>
                    <FarmingItem />
                </View>
            </View>
        )
    }
}