import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
} from 'react-native';

import  Item from '../../../page/sendHistory/item'
import styles from './style'
export default {
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.list}>
                  <View style={styles.item}>
                      <Item/>
                      <View style={styles.operation}>
                          <Text style={styles.browse}>浏览152次</Text>
                          <View style={styles.interactive}>
                              <View style={styles.row}>
                                  <Image style={styles.iconGood} source={require("../images/good.png")}></Image>
                                  <Text style={styles.good}>点赞10次</Text>
                              </View>
                              <Text style={styles.line}>|</Text>
                              <View style={styles.row}>
                                  <Image style={styles.iconComponent} source={require("../images/iconComent.png")}></Image>
                                  <Text style={styles.good}>评论45次</Text>
                              </View>
                          </View>
                      </View>
                  </View>
              </View>
            </View>
        )
    }
}