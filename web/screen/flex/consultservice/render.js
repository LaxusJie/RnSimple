import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import styles from './style'
export default {
    render(){
        return (
          <ScrollView style={styles.container}>
              <View style={styles.title}>
                  <View style={[styles.sign,styles.active]}>
                      <Text style={[styles.name,styles.highlight]}>已签约</Text>
                  </View>
                  <View style={styles.sign}>
                      <Text style={styles.name}>未签约</Text>
                  </View>
              </View>
              <View style={styles.list}>
                  <View style={styles.item}>
                     <View style={styles.signInfo}>
                         <Image style={styles.pic} source={require('../images/green.png')}></Image>
                         <View style={styles.farmMessage}>
                             <Text style={styles.message}>
                                 张三丰
                                 <Text style={styles.farm}>(农户)</Text>
                             </Text>
                             <Text style={styles.message}>签约时长 : 1个月</Text>
                             <Text style={styles.message}>签约日期 : 2017-10-10</Text>
                             <Text style={styles.time}>剩余时长 : 6天</Text>
                         </View>
                     </View>
                      <Text style={styles.location}>北京市 海淀区</Text>
                  </View>
              </View>
          </ScrollView>
        )
    }
}