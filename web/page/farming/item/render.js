import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from './style'
export default {
    render(){
        return (
            <View>
                <Text style={styles.stage}>适用作物阶段 : 草莓-定植期</Text>
                <Text style={styles.info}>标题 : 农事方案库施肥</Text>
                <Text numberOfLines={3} style={styles.info}>详细说明 : 农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥农事方案库施肥肥农事方案库施肥农事方案库施肥肥农事方f</Text>
                <View style={styles.picture}>
                    <Image style={styles.image} source={require("./image/green.png")} resizeMode="cover"></Image>
                    <Image style={styles.image} source={require("./image/green.png")} resizeMode="cover"></Image>
                    <Image style={styles.image} source={require("./image/green.png")} resizeMode="cover"></Image>
                    <Image style={styles.image} source={require("./image/green.png")} resizeMode="cover"></Image>
                </View>
            </View>
        )
    }
}