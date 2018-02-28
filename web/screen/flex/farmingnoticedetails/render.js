import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import  FarmingItem from '../../../page/farming/item'
import styles from './style'
export default {
    render(){
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.send}>
                    发送给 : <Text style={styles.sendName}>刘懿-东区温室</Text>
                </Text>
                <View >
                    <Image style={styles.video} source={require("../images/green.png")}></Image>
                </View>
                <Text style={styles.time}>2017-10-10</Text>
                <View style={styles.item}>
                    <FarmingItem />
                    <View style={styles.comment}>
                        <Image style={styles.iconComponent} source={require("../images/iconComent.png")}></Image>
                        <Text style={styles.number}>评论45次</Text>
                    </View>
                    <View style={styles.commentContent}>
                        <View style={styles.contentPadding}>
                            <Text style={styles.news}>
                                <Text style={styles.active}>张三丰</Text>
                                : 浏览次数很多....
                            </Text>
                            <Text style={styles.news}>
                                <Text><Text style={styles.active}>作者</Text>回复<Text style={styles.active}>张三丰</Text></Text>
                                : 浏览次数很多....
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}