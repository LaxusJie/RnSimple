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
              <View style={styles.list}>
                  <View style={styles.item}>
                      <Text style={styles.title}>修改密码</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>实名认证</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>版本信息</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>清空缓存</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={[styles.item,styles.noBorder]}>
                      <Text style={styles.title}>关于蓝农</Text>
                      <Image style={styles.go} source={require('./image/go.png')}></Image>
                  </View>
                  <View style={styles.signOut}>
                      <Text style={styles.btn}>退出登录</Text>
                  </View>
              </View>
          </ScrollView>
        )
    }
}